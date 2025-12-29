/**
 * Migration: Update property_names unique constraint
 * 
 * This migration loops over all tenants and:
 * 1. Drops the unique constraint on property_names.name
 * 2. Creates a new composite unique constraint on (name, category_id)
 */

import pg from 'pg';
import { fileURLToPath } from 'url';

const { Pool } = pg;

function getDbPool() {
  return new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
}

async function getAllTenants(pool) {
  const query = 'SELECT id, schema_name FROM tenants WHERE active = true ORDER BY id';
  const result = await pool.query(query);
  return result.rows;
}

async function dropOldConstraint(pool, tenantSchema) {
  const findConstraintsQuery = `
    SELECT 
      tc.constraint_name,
      STRING_AGG(kcu.column_name, ', ' ORDER BY kcu.ordinal_position) as columns
    FROM information_schema.table_constraints tc
    JOIN information_schema.key_column_usage kcu 
      ON tc.constraint_name = kcu.constraint_name
      AND tc.table_schema = kcu.table_schema
    WHERE tc.table_schema = $1
      AND tc.table_name = 'property_names'
      AND tc.constraint_type = 'UNIQUE'
    GROUP BY tc.constraint_name
    HAVING COUNT(kcu.column_name) = 1 
      AND STRING_AGG(kcu.column_name, ', ') = 'name';
  `;
  
  const constraintResult = await pool.query(findConstraintsQuery, [tenantSchema]);
  
  if (constraintResult.rows.length > 0) {
    for (const constraint of constraintResult.rows) {
      const dropQuery = `ALTER TABLE ${tenantSchema}.property_names DROP CONSTRAINT IF EXISTS ${constraint.constraint_name};`;
      await pool.query(dropQuery);
      console.log(`  ✓ Dropped constraint: ${constraint.constraint_name}`);
    }
  } else {
    const defaultNames = [
      'property_names_name_unique',
      'property_names_name_key',
      'property_names_name_uk',
      'uk_property_names_name'
    ];
    
    for (const constraintName of defaultNames) {
      const dropQuery = `ALTER TABLE ${tenantSchema}.property_names DROP CONSTRAINT IF EXISTS ${constraintName};`;
      await pool.query(dropQuery);
    }
    console.log(`  ✓ Attempted to drop constraints with default names`);
  }
}

async function createNewConstraint(pool, tenantSchema) {
  const constraintName = 'property_names_name_category_id_unique';
  
  const checkConstraintQuery = `
    SELECT constraint_name
    FROM information_schema.table_constraints
    WHERE table_schema = $1
      AND table_name = 'property_names'
      AND constraint_name = $2;
  `;
  
  const existingConstraint = await pool.query(checkConstraintQuery, [tenantSchema, constraintName]);
  
  if (existingConstraint.rows.length > 0) {
    console.log(`  ⚠ Constraint ${constraintName} already exists, skipping creation`);
    return;
  }
  
  const query = `
    ALTER TABLE ${tenantSchema}.property_names
    ADD CONSTRAINT ${constraintName}
    UNIQUE (name, category_id);
  `;
  
  await pool.query(query);
  console.log(`  ✓ Created constraint: ${constraintName}`);
}

async function migrateTenant(pool, tenant) {
  const tenantSchema = tenant.schema_name || `tenant_${tenant.id}`;
  
  console.log(`\nProcessing tenant: ${tenant.id} (schema: ${tenantSchema})`);
  
  try {
    const tableCheckQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = $1 
        AND table_name = 'property_names'
      );
    `;
    
    const tableExists = await pool.query(tableCheckQuery, [tenantSchema]);
    
    if (!tableExists.rows[0].exists) {
      console.log(`  ⚠ Skipping tenant ${tenant.id}: property_names table does not exist`);
      return;
    }
    
    const columnCheckQuery = `
      SELECT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_schema = $1 
        AND table_name = 'property_names'
        AND column_name = 'category_id'
      );
    `;
    
    const columnExists = await pool.query(columnCheckQuery, [tenantSchema]);
    
    if (!columnExists.rows[0].exists) {
      console.log(`  ⚠ Skipping tenant ${tenant.id}: category_id column does not exist`);
      return;
    }
    
    await dropOldConstraint(pool, tenantSchema);
    await createNewConstraint(pool, tenantSchema);
    
    console.log(`  ✓ Successfully migrated tenant ${tenant.id}`);
    
  } catch (error) {
    console.error(`  ✗ Error migrating tenant ${tenant.id}:`, error.message);
    throw error;
  }
}

async function runMigration() {
  const pool = getDbPool();
  
  try {
    console.log('Starting migration: Update property_names unique constraint');
    console.log('='.repeat(60));
    
    const tenants = await getAllTenants(pool);
    console.log(`Found ${tenants.length} active tenant(s)`);
    
    if (tenants.length === 0) {
      console.log('No tenants found. Exiting.');
      return;
    }
    
    for (const tenant of tenants) {
      await migrateTenant(pool, tenant);
    }
    
    console.log('\n' + '='.repeat(60));
    console.log('Migration completed successfully!');
    
  } catch (error) {
    console.error('\nMigration failed:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

const isMainModule = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];

if (isMainModule) {
  runMigration()
    .then(() => {
      console.log('Migration script finished');
      process.exit(0);
    })
    .catch((error) => {
      console.error('Migration script failed:', error);
      process.exit(1);
    });
}

export { runMigration };

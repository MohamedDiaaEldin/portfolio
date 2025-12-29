/**
 * Tenant Schema Manager
 * 
 * Utility functions for managing tenant schemas and ensuring
 * property_names table is created with the correct schema for new tenants
 */

import pg from 'pg';
const { Pool } = pg;
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Get database connection pool
 */
function getDbPool() {
  return new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });
}

/**
 * Read the property_names schema SQL file
 */
function getPropertyNamesSchema() {
  const schemaPath = join(__dirname, '../schemas/property_names_schema.sql');
  return readFileSync(schemaPath, 'utf-8');
}

/**
 * Create property_names table for a new tenant
 * 
 * @param {Object} pool - Database connection pool
 * @param {string|number} tenantId - Tenant ID
 * @param {string} tenantSchema - Schema name for the tenant (optional, defaults to tenant_{id})
 */
async function createPropertyNamesTableForTenant(pool, tenantId, tenantSchema = null) {
  const schema = tenantSchema || `tenant_${tenantId}`;
  
  console.log(`Creating property_names table for tenant ${tenantId} in schema ${schema}`);
  
  try {
    // Ensure schema exists
    await pool.query(`CREATE SCHEMA IF NOT EXISTS ${schema}`);
    
    // Read schema SQL
    const schemaSQL = getPropertyNamesSchema();
    
    // Adjust SQL to use schema-qualified table names
    // Replace table references with schema-qualified versions
    const adjustedSQL = schemaSQL
      .replace(/CREATE TABLE IF NOT EXISTS property_names/g, `CREATE TABLE IF NOT EXISTS ${schema}.property_names`)
      .replace(/ON property_names/g, `ON ${schema}.property_names`)
      .replace(/COMMENT ON TABLE property_names/g, `COMMENT ON TABLE ${schema}.property_names`)
      .replace(/COMMENT ON COLUMN property_names\./g, `COMMENT ON COLUMN ${schema}.property_names.`)
      .replace(/COMMENT ON CONSTRAINT property_names_name_category_id_unique ON property_names/g, 
               `COMMENT ON CONSTRAINT property_names_name_category_id_unique ON ${schema}.property_names`)
      // Handle foreign key reference - adjust categories table reference if needed
      .replace(/REFERENCES categories\(/g, `REFERENCES ${schema}.categories(`);
    
    // Execute schema creation
    await pool.query(adjustedSQL);
    
    console.log(`✓ Successfully created property_names table for tenant ${tenantId}`);
    
  } catch (error) {
    console.error(`✗ Error creating property_names table for tenant ${tenantId}:`, error.message);
    throw error;
  }
}

/**
 * Initialize tenant schema with property_names table
 * This should be called when creating a new tenant
 * 
 * @param {Object} pool - Database connection pool
 * @param {Object} tenantData - Tenant data { id, name, schema_name?, ... }
 */
async function initializeTenantSchema(pool, tenantData) {
  const tenantId = tenantData.id;
  const tenantSchema = tenantData.schema_name || `tenant_${tenantId}`;
  
  console.log(`Initializing schema for tenant ${tenantId}...`);
  
  try {
    // Create property_names table with correct schema
    await createPropertyNamesTableForTenant(pool, tenantId, tenantSchema);
    
    console.log(`✓ Tenant schema initialized successfully for tenant ${tenantId}`);
    
  } catch (error) {
    console.error(`✗ Error initializing tenant schema:`, error.message);
    throw error;
  }
}

/**
 * Verify that property_names table has the correct constraint
 * 
 * @param {Object} pool - Database connection pool
 * @param {string|number} tenantId - Tenant ID
 * @param {string} tenantSchema - Schema name for the tenant
 */
async function verifyPropertyNamesConstraint(pool, tenantId, tenantSchema = null) {
  const schema = tenantSchema || `tenant_${tenantId}`;
  
  const query = `
    SELECT constraint_name, constraint_type
    FROM information_schema.table_constraints
    WHERE table_schema = $1
      AND table_name = 'property_names'
      AND constraint_type = 'UNIQUE'
      AND constraint_name = 'property_names_name_category_id_unique';
  `;
  
  const result = await pool.query(query, [schema]);
  
  if (result.rows.length > 0) {
    console.log(`✓ Tenant ${tenantId}: Correct constraint found`);
    return true;
  } else {
    console.log(`✗ Tenant ${tenantId}: Constraint not found or incorrect`);
    return false;
  }
}

export {
  createPropertyNamesTableForTenant,
  initializeTenantSchema,
  verifyPropertyNamesConstraint,
  getPropertyNamesSchema
};

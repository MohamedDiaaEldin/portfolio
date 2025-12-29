/**
 * Example: Creating a new tenant with property_names table
 * 
 * This example shows how to use the tenant-schema-manager
 * to ensure new tenants get the correct property_names schema
 */

import { initializeTenantSchema, verifyPropertyNamesConstraint } from '../utils/tenant-schema-manager.js';
import pg from 'pg';
const { Pool } = pg;

/**
 * Example function to create a new tenant
 * This should be integrated into your tenant creation logic
 */
async function createNewTenant(tenantData) {
  const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  try {
    // Start transaction
    await pool.query('BEGIN');

    // 1. Create tenant record in tenants table
    const insertTenantQuery = `
      INSERT INTO tenants (name, schema_name, active, created_at)
      VALUES ($1, $2, true, CURRENT_TIMESTAMP)
      RETURNING id, schema_name;
    `;
    
    const tenantResult = await pool.query(insertTenantQuery, [
      tenantData.name,
      tenantData.schema_name || `tenant_${Date.now()}`
    ]);
    
    const newTenant = tenantResult.rows[0];
    console.log(`Created tenant record: ${newTenant.id}`);

    // 2. Initialize tenant schema with property_names table
    await initializeTenantSchema(pool, {
      id: newTenant.id,
      schema_name: newTenant.schema_name
    });

    // 3. Verify the constraint was created correctly
    const isValid = await verifyPropertyNamesConstraint(
      pool, 
      newTenant.id, 
      newTenant.schema_name
    );

    if (!isValid) {
      throw new Error('Failed to verify property_names constraint');
    }

    // 4. Commit transaction
    await pool.query('COMMIT');

    console.log(`✓ Successfully created tenant ${newTenant.id} with correct schema`);
    return newTenant;

  } catch (error) {
    // Rollback on error
    await pool.query('ROLLBACK');
    console.error('Error creating tenant:', error);
    throw error;
  } finally {
    await pool.end();
  }
}

// Example usage
if (import.meta.url === `file://${process.argv[1]}`) {
  const newTenantData = {
    name: 'Example Tenant',
    schema_name: 'tenant_example' // optional, will be auto-generated if not provided
  };

  createNewTenant(newTenantData)
    .then((tenant) => {
      console.log('Tenant created:', tenant);
      process.exit(0);
    })
    .catch((error) => {
      console.error('Failed to create tenant:', error);
      process.exit(1);
    });
}

export { createNewTenant };

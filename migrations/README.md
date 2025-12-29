# Database Migrations

This directory contains database migration scripts and schema definitions for the multi-tenant application.

## Structure

```
migrations/
├── README.md
├── 20241201_update_property_names_unique_constraint.js  # Migration script
├── schemas/
│   └── property_names_schema.sql                        # Schema definition
└── utils/
    └── tenant-schema-manager.js                         # Tenant management utilities
```

## Migration: Update Property Names Unique Constraint

### Overview

This migration updates the `property_names` table across all tenants to:
1. Drop the existing unique constraint on `name` column
2. Create a new composite unique constraint on `(name, category_id)` columns

This allows the same property name to exist in different categories while maintaining uniqueness within each category.

### Running the Migration

#### Prerequisites

1. Install required dependencies:
```bash
npm install pg
```

2. Set environment variables:
```bash
export DB_HOST=localhost
export DB_PORT=5432
export DB_NAME=your_database
export DB_USER=your_user
export DB_PASSWORD=your_password
```

#### Execute Migration

```bash
node migrations/20241201_update_property_names_unique_constraint.js
```

Or using npm script (add to package.json):
```json
{
  "scripts": {
    "migrate:property-names": "node migrations/20241201_update_property_names_unique_constraint.js"
  }
}
```

Then run:
```bash
npm run migrate:property-names
```

### What the Migration Does

1. **Connects to database** using environment variables
2. **Fetches all active tenants** from the `tenants` table
3. **For each tenant**:
   - Checks if `property_names` table exists
   - Checks if `category_id` column exists
   - Drops the old unique constraint on `name`
   - Creates new composite unique constraint on `(name, category_id)`
4. **Logs progress** for each tenant
5. **Handles errors** gracefully, continuing with other tenants if one fails

### Schema Definition

The `schemas/property_names_schema.sql` file contains the complete schema definition with:
- Table structure
- Composite unique constraint `(name, category_id)`
- Foreign key to categories table
- Indexes for performance
- Auto-update trigger for `updated_at` column

### Creating New Tenants

When creating a new tenant, use the `tenant-schema-manager.js` utility to ensure the `property_names` table is created with the correct schema:

```javascript
import { initializeTenantSchema } from './migrations/utils/tenant-schema-manager.js';
import { getDbPool } from './your-db-config.js';

const pool = getDbPool();
const newTenant = {
  id: 123,
  name: 'New Tenant',
  schema_name: 'tenant_123' // optional
};

await initializeTenantSchema(pool, newTenant);
```

This ensures new tenants automatically get the correct constraint from the start.

### Verification

To verify the constraint was applied correctly:

```javascript
import { verifyPropertyNamesConstraint } from './migrations/utils/tenant-schema-manager.js';

const isValid = await verifyPropertyNamesConstraint(pool, tenantId, tenantSchema);
```

### Rollback

If you need to rollback this migration, you would need to:
1. Drop the composite constraint `property_names_name_category_id_unique`
2. Recreate the single-column unique constraint on `name`

**Note**: This may fail if there are duplicate names within the same category after the migration.

### Database Assumptions

- PostgreSQL database
- Multi-tenant architecture with either:
  - Schema-per-tenant (each tenant has its own schema)
  - Row-level security with `tenant_id` column
- `tenants` table exists with columns: `id`, `schema_name`, `active`
- `property_names` table exists in each tenant schema with columns: `id`, `name`, `category_id`

### Troubleshooting

**Error: "relation does not exist"**
- Ensure the tenant schema exists
- Check that `schema_name` in tenants table is correct

**Error: "column category_id does not exist"**
- The migration will skip tenants without `category_id` column
- You may need to add this column first with a separate migration

**Error: "constraint already exists"**
- The migration uses `IF EXISTS` and `IF NOT EXISTS` clauses
- If this still fails, manually check and drop the constraint first

## Best Practices

1. **Always backup** your database before running migrations
2. **Test migrations** on a staging environment first
3. **Run migrations** during low-traffic periods
4. **Monitor** the migration logs for any errors
5. **Verify** the constraint after migration completes

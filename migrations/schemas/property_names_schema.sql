/**
 * Schema definition for property_names table
 * 
 * This schema includes the composite unique constraint on (name, category_id)
 * Use this schema when creating the property_names table for new tenants
 */

CREATE TABLE IF NOT EXISTS property_names (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  category_id INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  
  -- Composite unique constraint: name must be unique within a category
  CONSTRAINT property_names_name_category_id_unique UNIQUE (name, category_id),
  
  -- Foreign key to categories table (adjust table name as needed)
  CONSTRAINT fk_property_names_category 
    FOREIGN KEY (category_id) 
    REFERENCES categories(id) 
    ON DELETE CASCADE
);

-- Create index on category_id for better query performance
CREATE INDEX IF NOT EXISTS idx_property_names_category_id 
  ON property_names(category_id);

-- Create index on name for search performance
CREATE INDEX IF NOT EXISTS idx_property_names_name 
  ON property_names(name);

-- Create updated_at trigger function (if not exists)
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = CURRENT_TIMESTAMP;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to auto-update updated_at
DROP TRIGGER IF EXISTS update_property_names_updated_at ON property_names;
CREATE TRIGGER update_property_names_updated_at
  BEFORE UPDATE ON property_names
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Comments for documentation
COMMENT ON TABLE property_names IS 'Stores property names with category association';
COMMENT ON COLUMN property_names.id IS 'Primary key';
COMMENT ON COLUMN property_names.name IS 'Property name (unique within category)';
COMMENT ON COLUMN property_names.category_id IS 'Foreign key to categories table';
COMMENT ON CONSTRAINT property_names_name_category_id_unique ON property_names IS 
  'Ensures property names are unique within each category';

-- Schema definition for property_names table
-- This schema should be used when creating the property_names table for new tenants
-- Updated constraint: Composite unique constraint on (name, category_id)

CREATE TABLE property_names (
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

-- Indexes for better query performance
CREATE INDEX idx_property_names_category_id ON property_names(category_id);
CREATE INDEX idx_property_names_name ON property_names(name);

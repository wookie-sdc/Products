DROP DATABASE IF EXISTS productoverview WITH (FORCE);

CREATE DATABASE productoverview;

\c productoverview;

-- DROP TABLE IF EXISTS products, features, styles, photos, skus related;

CREATE TABLE IF NOT EXISTS products (
  id INTEGER UNIQUE PRIMARY KEY NOT NULL,
  name VARCHAR(225) NOT NULL,
  slogan VARCHAR(225) NOT NULL,
  description VARCHAR(535) NOT NULL,
  category VARCHAR(255) NOT NULL,
  default_price INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS features (
  id INTEGER UNIQUE PRIMARY KEY NOT NULL,
  product_id INTEGER NOT NULL,
  feature VARCHAR(225) NOT NULL,
  value VARCHAR(225) NOT NULL,
  CONSTRAINT features_id FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE IF NOT EXISTS styles (
  id INTEGER UNIQUE PRIMARY KEY NOT NULL,
  product_id INTEGER NOT NULL,
  name VARCHAR(225) NOT NULL,
  sale_price INTEGER,
  original_price INTEGER NOT NULL,
  default_style BOOLEAN NOT NULL,
  CONSTRAINT styles_id FOREIGN KEY (product_id) REFERENCES products (id)
);

CREATE TABLE IF NOT EXISTS photos (
  id INTEGER UNIQUE PRIMARY KEY NOT NULL,
  style_id INTEGER NOT NULL,
  url TEXT NOT NULL,
  thumbnail_url TEXT NOT NULL,
  CONSTRAINT photos_id FOREIGN KEY (style_id) REFERENCES styles (id)
);

CREATE TABLE IF NOT EXISTS skus (
  id INTEGER UNIQUE PRIMARY KEY NOT NULL,
  style_id INTEGER NOT NULL,
  size VARCHAR(25) NOT NULL,
  quantity INTEGER NOT NULL,
  CONSTRAINT skus_id FOREIGN KEY (style_id) REFERENCES styles (id)
);

CREATE TABLE IF NOT EXISTS related (
  id INTEGER UNIQUE PRIMARY KEY NOT NULL,
  current_product_id INTEGER NOT NULL,
  related_product_id INTEGER NOT NULL,
  CONSTRAINT related_id FOREIGN KEY (current_product_id) REFERENCES products (id)
);

-- indexes
-- CREATE INDEX indexname ON tablename (the column you want to create as index);

CREATE INDEX styles_skus_prod_id on skus (style_id);
CREATE INDEX styles_photos_prod_id on photos (style_id);
CREATE INDEX styles_prod_id on styles (product_id);
CREATE INDEX related_prod_id on related (current_product_id);

COPY products FROM '/Users/estherkuang/ProductsCSVs/product.csv' DELIMITER ',' CSV Header;

COPY styles FROM '/Users/estherkuang/ProductsCSVs/styles.csv' DELIMITER ',' CSV Header NULL 'null';

COPY features FROM '/Users/estherkuang/ProductsCSVs/features.csv' DELIMITER ',' CSV Header;

COPY photos FROM '/Users/estherkuang/ProductsCSVs/photos.csv' DELIMITER ',' CSV Header;

COPY skus FROM '/Users/estherkuang/ProductsCSVs/skus.csv' DELIMITER ',' CSV Header;

COPY related FROM '/Users/estherkuang/ProductsCSVs/related.csv' DELIMITER ',' CSV Header;

-- test
-- DROP DATABASE IF EXISTS test WITH (FORCE);
-- CREATE DATABASE test;
-- \connect test;

-- CREATE TABLE test (
--   id INTEGER,
--   name VARCHAR(50)
-- )
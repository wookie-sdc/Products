DROP DATABASE IF EXISTS productOverview WITH (FORCE);

CREATE DATABASE productOverview;

\c productOverview

DROP TABLE IF EXISTS products;

CREATE TABLE IF NOT EXISTS products (
  id PRIMARY KEY,
  name VARCHAR(225) NULL DEFAULT NULL,
  slogan VARCHAR(225) NULL DEFAULT NULL,
  description VARCHAR(535) NULL DEFAULT NULL,
  category VARCHAR(255) NULL DEFAULT NULL,
  default_price INTEGER(65) NULL DEFAULT NULL,
)
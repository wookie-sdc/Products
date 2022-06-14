const db = require('./index.js');

const model = {
  products: function(callback) {
    // var count = || 5;
    // console.log('what is this', db)
    // `SELECT * FROM products ORDER BY id LIMIT ${count} OFFSET ${(page - 1) * count}`
    db.query('SELECT * FROM products LIMIT 5', function(err, data) {
      // console.log('data??', data)
      if (err) {
        callback(err, data)
      } else {
        callback(null, data);
      }
    })
  },

  productInfo: function(callback, values) {
    // console.log('what id prodId', values)
    var queryStr = `SELECT products.*, (
      SELECT json_agg(product)
      FROM (
        SELECT features.feature, features.value
        FROM features
        WHERE features.product_id = products.id
      ) product)
      AS features
      FROM products
      WHERE products.id = $1;`

    db.query(queryStr, values, function(err, data) {
      if (err) {
        callback(err, data)
      } else {
        callback(null, data);
      }
    })
  },

  productStyles: function(callback, values) {
    // console.log('prodId??', values);
    var queryStr = `
      SELECT id AS style_id, name, original_price, sale_price, default_style as 'default?',
      (SELECT json_agg(
        json_build_object('url', url, 'thumbnail_url', thumbnail_url))
          AS photos
          FROM photos
          WHERE style_id = styles.id),
      (SELECT json_object_agg("id", json_build_object('quantity', quantity, 'size', size))
        AS skus
        FROM skus
        WHERE style_id = styles.id)
      FROM styles styles
      WHERE styles.product_id = $1
    `
    db.query(queryStr, values, function(err, data) {
      // console.log('data??', data.rows)
      if (err) {
        callback(err, data)
      } else {
        callback(null, data);
      }
    })
  },

  relatedProducts: function(callback, values) {
    // console.log('prodId??', values);
    var queryStr = `
      SELECT related_product_id FROM related
      WHERE current_product_id = $1
    `
    db.query(queryStr, values, function(err, data) {
      // console.log('data??', data)
      if (err) {
        callback(err, data)
      } else {
        callback(null, data);
      }
    })
  },

}

module.exports = model;
const db = require('./index.js');

const model = {
  products: function(callback) {
    // var count = || 5;
    // console.log('what is this', db)
    // `SELECT * FROM products ORDER BY id LIMIT ${count} OFFSET ${(page - 1) * count}`
    db.query('SELECT * FROM products LIMIT 5', function(err, data) {
      console.log('data??', data)
      if (err) {
        console.log(err)
      } else {
        callback(err, data);
      }
    })
  },

  productInfo: function(callback, values) {
    // console.log('what is this', db)
    console.log('what id prodId', values)
    // var queryStr = `SELECT * FROM products WHERE id=$1`
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
      // console.log('data??', data)
      if (err) {
        console.log(err)
      } else {
        callback(err, data);
      }
    })
  }, //MISSING FEATURES!!!

  // productFeatures: function(callback, values) {
  //   // console.log('what is this', db)
  //   console.log('what id prodId', values)
  //   var queryStr = `SELECT * FROM features WHERE id=$1`
  //   // var queryStr = `SELECT json_agg(json_build_object)
  //   //   FROM (
  //   //     SELECT WHERE id=$1`
  //   db.query(queryStr, values, function(err, data) {
  //     // console.log('data??', data)
  //     if (err) {
  //       console.log(err)
  //     } else {
  //       callback(err, data);
  //     }
  //   })
  // }, //add this to products!!

  productStyles: function(callback, values) {
    console.log('prodId??', values);
    var queryStr = `SELECT * FROM styles WHERE id=$1`

    var queryStr = `SELECT styles.*, (
      SELECT json_agg(prodStyles)
      FROM (
        SELECT photos.thumbnail_url, photos.url
        FROM photos
        WHERE photos.id = styles.id
      ) prodStyles)
      AS photos
      FROM styles
      WHERE styles.id = $1;`

    db.query(queryStr, values, function(err, data) {
      console.log('data??', data.rows)
      if (err) {
        console.log(err)
      } else {
        callback(err, data);
      }
    })
  }, //need to add PHOTOS AND SKUS!!!

  productPhotos: function(callback, values) {
    console.log('prodId??', values);
    var queryStr = `SELECT * FROM photos WHERE id=$1`
    db.query(queryStr, values, function(err, data) {
      console.log('data??', data.rows)
      if (err) {
        console.log(err)
      } else {
        callback(err, data);
      }
    })
  }, //need to add to the styles!!!

  productSkus: function(callback, values) {
    console.log('prodId??', values);
    var queryStr = `SELECT * FROM skus WHERE id=$1`
    db.query(queryStr, values, function(err, data) {
      console.log('data??', data.rows)
      if (err) {
        console.log(err)
      } else {
        callback(err, data);
      }
    })
  }, //need to add to the styles!!!

  relatedProducts: function(callback, values) {
    console.log('prodId??', values);
    var queryStr = `SELECT * FROM related WHERE id=$1`
    db.query(queryStr, values, function(err, data) {
      console.log('data??', data.rows)
      if (err) {
        console.log(err)
      } else {
        callback(err, data);
      }
    })
  },


}

module.exports = model;
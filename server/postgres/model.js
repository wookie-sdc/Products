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

  productsInfo: function(productId, callback) {
    // console.log('what is this', db)
    console.log('what id prodId', productId)
    db.query(`SELECT * FROM products WHERE id=${productId} LIMIT 5`, function(err, data) {
      console.log('data??', data)
      if (err) {
        console.log(err)
      } else {
        callback(err, data);
      }
    })
  }


}

module.exports = model;
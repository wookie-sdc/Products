const model = require('./model.js')

module.exports = {
  products: function(req, res) {
    // console.log('res cont', req.query.count)
    model.products((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log('results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    })
  },

  productInfo: function(req, res) {
    // console.log('res cont', res)
    var prodId = [req.params.product_id];
    // console.log('what is req??', prodId)
    model.productInfo((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log('results??', results.rows[0].features)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    }, prodId)
  },

  productStyles: function(req, res) {
    var prodId = [req.params.product_id];
    // console.log('what is req??', prodId)
    model.productStyles((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log('prodStyle results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    }, prodId)
  },

  relatedProducts: function(req, res) {
    var prodId = [req.params.product_id];
    // console.log('what is req??', prodId)
    model.relatedProducts((err, results) => {
      if (err) {
        res.status(404).send(err);
      } else {
        // console.log('relatedProducts results??', results.rows)
        var result = [];
        results.rows.map((product) => {
          result.push(product.related_product_id)
        })
        // res.json(results.rows)
        res.status(200).send(result);
      }
    }, prodId)
  },

}
const model = require('./model.js')

module.exports = {
  products: function(req, res) {
    console.log('res cont', req.query.count)
    model.products((err, results) => {
      if (err) {
        res.sendStatus(404)
        console.log('err:', err)
      } else {
        console.log('results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    })
  },

  productInfo: function(req, res) {
    // console.log('res cont', res)
    var prodId = [req.params.product_id];
    console.log('what is req??', prodId)
    model.productInfo((err, results) => {
      if (err) {
        res.sendStatus(404)
        console.log('err:', err)
      } else {
        console.log('results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    }, prodId)
  },

  productFeatures: function(req, res) {
    // console.log('res cont', res)
    var prodId = [req.params.product_id];
    console.log('what is req??', prodId)
    model.productFeatures((err, results) => {
      if (err) {
        res.sendStatus(404)
        console.log('err:', err)
      } else {
        console.log('productFeatures??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    }, prodId)
  },

  productStyles: function(req, res) {
    // console.log('res cont', res)
    var prodId = [req.params.product_id];
    console.log('what is req??', prodId)
    model.productStyles((err, results) => {
      if (err) {
        res.sendStatus(404)
        console.log('err:', err)
      } else {
        console.log('prodStyle results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    }, prodId)
  },

  productPhotos: function(req, res) {
    // console.log('res cont', res)
    var prodId = [req.params.product_id];
    console.log('what is req??', prodId)
    model.productPhotos((err, results) => {
      if (err) {
        res.sendStatus(404)
        console.log('err:', err)
      } else {
        console.log('prodPhotos results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    }, prodId)
  },

  productSkus: function(req, res) {
    // console.log('res cont', res)
    var prodId = [req.params.product_id];
    console.log('what is req??', prodId)
    model.productSkus((err, results) => {
      if (err) {
        res.sendStatus(404)
        console.log('err:', err)
      } else {
        console.log('productSkus results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    }, prodId)
  },

  relatedProducts: function(req, res) {
    // console.log('res cont', res)
    var prodId = [req.params.product_id];
    console.log('what is req??', prodId)
    model.relatedProducts((err, results) => {
      if (err) {
        res.sendStatus(404)
        console.log('err:', err)
      } else {
        console.log('relatedProducts results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    }, prodId)
  },

}
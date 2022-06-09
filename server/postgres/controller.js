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
    var prodId = JSON.stringify(req.params.product_id);
    console.log('what is req??', prodId)
    model.productsInfo((prodId, err, results) => {
      if (err) {
        res.sendStatus(404)
        console.log('err:', err)
      } else {
        console.log('results??', results.rows)
        // res.json(results.rows)
        res.status(200).send(results.rows);
      }
    })
  }

}
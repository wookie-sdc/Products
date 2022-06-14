require('dotenv').config()
const express = require('express');
const client = require('./postgres/index.js');
const controller = require('./postgres/controller.js')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT
const PORT = port || 3000;

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.get('/products', controller.products);
app.get('/products/:product_id', controller.productInfo);
app.get('/products/:product_id/styles', controller.productStyles);
app.get('/products/:product_id/styles/related', controller.relatedProducts);
app.get('/loaderio-9457e572686a31310e8617071b5b915e', (req, res) => {
  console.log('loaderio worked')
  res.send('loaderio-9457e572686a31310e8617071b5b915e');
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

client.connect();
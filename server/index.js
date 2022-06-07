require('dotenv').config()
const express = require('express');
const client = require('./postgres/index.js');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT
const PORT = port || 3300;

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

client.connect();
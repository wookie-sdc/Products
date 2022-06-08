import mongoose from 'mongoose';
const { Schema } = mongoose;

//need to connect db

const products = new Schema({
  id: Number,
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number
});

const styles = new Schema({
  product_id: Number,
  results: [
    {
      style_id: Number,
      name: String,
      original_price: String,
      "default?": String,
      photos: [
        {
          thumbnail_url: String,
          url: String
        }
      ]
    }
  ],
  skus: [
    skus_id: {
      quantity: Number,
      size: String
    }
  ]
});


// module.exports = mongoose.model("user", UserScheme);
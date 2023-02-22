'use strict';
import { Product } from '../models/index.js';

const postProduct = async (req, res, next) => {
  try {
    const {
      name,
      type,
      price,
      description,
      wine_type,
      origin,
      abv,
      image_path,
    } = req.body;

    const productInfo = await Product.create({
      name,
      type,
      price,
      description,
      wine_type,
      origin,
      abv,
      image_path,
    });
    productInfo.save();
    console.log('saved in database');
    res.send('success');
  } catch (e) {
    console.log(e.message);
  }
};

export default postProduct;

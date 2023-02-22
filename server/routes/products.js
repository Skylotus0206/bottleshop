'use strict';
import express from 'express';
const router = express.Router();

import { Product } from '../models/index.js';
import postProduct from '../controller/productController.js';

// http://localhost:8080/product
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.post('/', postProduct);

export default router;

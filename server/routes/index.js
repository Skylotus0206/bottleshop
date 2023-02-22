'use strict';
import express from 'express';
const router = express.Router();
import { Product } from '../models/index.js';

import postProduct from '../controller/productController.js';
import usersRouter from './users.js';

// http://localhost:8080
router.get('/', (req, res) => {
  res.render('index');
});

// http://localhost:8080/product
router.get('/product', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.post('/product', postProduct);

router.use('/users', usersRouter);

export default router;


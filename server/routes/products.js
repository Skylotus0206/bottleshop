'use strict';
import express from 'express';
const router = express.Router();

import { Product } from '../models/index.js';
import postProduct from '../controller/products/postProduct.js';
import updateProduct from '../controller/products/updateProduct.js';
import deleteProduct from '../controller/products/deleteProduct.js';

// http://localhost:8080/products (상품 목록 반환)
router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// http://localhost:8080/products (상품 추가)
router.post('/', postProduct);

// http://localhost:8080/products/edit/:_id (상품 수정)
router.put('/edit/:_id', updateProduct);

// http://localhost:8080/products/delete/:_id (상품 삭제)
router.delete('/delete/:_id', deleteProduct);

export default router;

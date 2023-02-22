'use strict';
import express from 'express';
const router = express.Router();

import postOrder from '../controller/postOrder.js';

// http://localhost:8080/order
router.get('/', async (req, res) => {
  res.json(req.body);
});

router.post('/', postOrder);

export default router;

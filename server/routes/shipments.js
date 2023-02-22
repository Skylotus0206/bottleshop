'use strict';
import express from 'express';
const router = express.Router();

import postShipment from '../controller/postShipment.js';

// http://localhost:8080/shipment
router.get('/', (req, res) => {
  res.render('shipment');
});

router.post('/', postShipment);

export default router;

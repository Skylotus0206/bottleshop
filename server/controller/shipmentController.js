'use strict';
import { Shipment, Order } from '../models/index.js';

const postShipment = async (req, res, next) => {
  try {
    const {
      order_id,
      user_id,
      guest_id,
      tracking_number,
      city,
      district,
      address1,
      address2,
      recipient,
      phone,
      request,
    } = req.body;

    const existedOrder = await Order.findById(order_id);

    const shipmentInfo = await Shipment.create({
      order_id,
      user_id,
      guest_id,
      tracking_number,
      city,
      district,
      address1,
      address2,
      recipient,
      phone,
      request,
    });

    console.log(shipmentInfo);
    shipmentInfo.save();
    res.send('success');
    console.log('saved in database');
  } catch (e) {
    console.log(e.message);
  }
};

export default postShipment;

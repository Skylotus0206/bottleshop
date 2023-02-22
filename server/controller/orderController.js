'use strict';
import { Order, User, Product, Guest } from '../models/index.js';

const postOrder = async (req, res, next) => {
  const { user_id, guest_id, product_id, w_count, c_count } = req.body;
  try {
    const orderInfo = await Order.create({
      user_id,
      product_id,
      w_count,
      c_count,
    });

    // populate product_id
    await Order.findOne({ product_id: product_id })
      .populate('product_id', 'type price')
      .exec();

    orderInfo.save();

    console.log('saved in database');
    res.send('success');
  } catch (e) {
    console.log(e.message);
  }
};

export default postOrder;

'use strict';
import { Order, User, Product, Guest } from '../models/index.js';

const postOrder = async (req, res, next) => {
  const { user_id, guest_id, product_id, w_count, c_count } = req.body;
  try {
    const orderInfo = await Order.create({
      user_id,
      guest_id,
      product_id,
      w_count,
      c_count,
    });

    console.log(orderInfo);

    // populate product_id
    const result = await Order.findOne({ _id: orderInfo._id })
      .populate('product_id', 'type price')
      .exec();

    console.log('saved in database');
    res.send(result);
  } catch (err) {
    console.log(err.message);
  }
};

export default postOrder;

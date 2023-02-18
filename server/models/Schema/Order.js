'use strict';
import { Schema } from 'mongoose';

const OrderSchema = new Schema({
  _id: Schema.Types.ObjectId,
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  product_id: {
    type: [Object],
    ref: 'Product',
  },
  w_count: Number,
  c_count: Number,
},
{
  timestamps: true,
});

export default OrderSchema;
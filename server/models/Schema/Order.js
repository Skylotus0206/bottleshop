'use strict';
import { Schema } from 'mongoose';

const OrderSchema = new Schema(
  {
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    guest_id: {
      type: Schema.Types.ObjectId,
      ref: 'Guest',
    },
    product_id: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Product',
      },
    ],
    w_count: Number,
    c_count: Number,
  },
  {
    timestamps: true,
  }
);

export default OrderSchema;

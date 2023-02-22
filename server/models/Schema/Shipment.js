'use strict';
import { Schema } from 'mongoose';

const ShipmentSchema = new Schema(
  {
    order_id: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    user_id: {
      type: Schema.Types.ObjectId,
      ref: 'Order',
      required: true,
    },
    guest_id: {
      type: Schema.Types.ObjectId,
      ref: 'Guest',
      // required: true,
    },
    tracking_number: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    district: {
      type: String,
      required: true,
    },
    address1: {
      type: String,
      required: true,
    },
    address2: {
      type: String,
    },
    recipient: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    request: {
      type: String,
      default: '대문 앞',
    },

  },
  {
    timestamps: true,
  }
);

export default ShipmentSchema;

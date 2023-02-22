'use strict';
import { Schema } from 'mongoose';

const GuestSchema = new Schema(
{
    order_id: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    }
},
{
      timestamps: true,
});
  
export default GuestSchema;

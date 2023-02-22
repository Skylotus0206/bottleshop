'use strict';
import { Schema } from 'mongoose';

const ProductSchema = new Schema(
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    wine_type: String,
    origin: String,
    abv: String,
    image_path: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default ProductSchema;

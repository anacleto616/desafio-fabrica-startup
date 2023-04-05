import {model, Schema} from 'mongoose';
import { Category } from './Category';

export const Product = model(
  'Product',
  new Schema({
    categories: {
      type: [Category],
      required: true,
      ref: 'Category',
    },
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true,
    }
  }),
);

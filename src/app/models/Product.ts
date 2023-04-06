import {model, Schema} from 'mongoose';

export const Product = model(
  'Product',
  new Schema({
    categories: {
      type: [{ parent: Schema.Types.ObjectId, name: String }],
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

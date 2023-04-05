import {model, Schema} from 'mongoose';

export const Category = model(
  'Category',
  new Schema({
    parent: {
      type: Schema.Types.ObjectId,
      required: false,
      ref: 'Category',
      default: null
    },
    name: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
  }),
);

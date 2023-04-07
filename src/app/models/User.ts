import {model, Schema} from 'mongoose';

export const User = model(
  'User',
  new Schema({
    username: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
    },
    password: {
      type: String,
      trim: true,
      required: true,
    },
  }),
);

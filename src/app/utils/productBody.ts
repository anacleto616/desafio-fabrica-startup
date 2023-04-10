import { z } from 'zod';
import { categoryBody } from './categoryBody';

export const productBody = z.object({
  categories: categoryBody,
  name: z.string(),
  quantity: z.number().nonnegative(),
  price: z.number().nonnegative()
});

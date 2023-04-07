import { z } from 'zod';

export const productBody = z.object({
  categories: z.object({parent: z.string(), name: z.string()}).array().nonempty(),
  name: z.string(),
  quantity: z.number().nonnegative(),
  price: z.number().nonnegative()
});

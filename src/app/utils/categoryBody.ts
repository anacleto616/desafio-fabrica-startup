import { z } from 'zod';

export const categoryBody = z.object({
  parent: z.any(),
  name: z.string().nonempty().trim().toLowerCase()
}).array().nonempty();

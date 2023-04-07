import { z } from 'zod';

export const userBody = z.object({
  username: z.string().trim(),
  password: z.string().trim(),
});

import { z } from "zod";


// zod is used for validation. The goal is to eliminate duplicative type declarations.
export const restaurantSchema = z.object({
  menu: z.string().min(2, "Menu title must be > 2 characters"),
  price: z.coerce.number(),
  description: z.string().max(50, "Description must be < 50 characters"),
});
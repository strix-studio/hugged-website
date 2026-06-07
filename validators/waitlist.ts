import { z } from "zod";

export const waitlistSchema = z.object({
    email: z.email(),
    name: z.string().min(2).max(100).optional(),
});
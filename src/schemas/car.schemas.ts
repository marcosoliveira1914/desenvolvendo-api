import { z}  from "zod";

export const carSchema = z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    description: z.string().min(1).nullish(),
    brand: z.string().min(1),
    year: z.number().positive().min(1),
    km: z.number().positive().min(1)
});

export type TCar = z.infer<typeof carSchema>;

export const carCreateBodySchema = carSchema.omit({ id: true});

export const carUpdateBodySchema = carCreateBodySchema.partial();

export type TCarCreateBody = z.infer<typeof carCreateBodySchema>;

export type TCarUpdateBody = z.infer<typeof carUpdateBodySchema>;




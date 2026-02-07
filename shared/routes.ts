import { z } from "zod";
import { insertLeadSchema, insertReviewSchema } from "./schema";

export * from "./schema";

export const api = {
  leads: {
    create: {
      path: "/api/leads",
      method: "POST" as const,
      input: insertLeadSchema,
      responses: {
        201: z.any(),
      },
    },
  },
  reviews: {
    list: {
      path: "/api/reviews",
      method: "GET" as const,
      responses: {
        200: z.array(z.any()),
      },
    },
    create: {
      path: "/api/reviews",
      method: "POST" as const,
      input: insertReviewSchema,
      responses: {
        201: z.any(),
      },
    },
  },
};

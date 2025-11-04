import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({

  server: {
    NODE_ENV: z.enum(["development", "production"]).default("development"),
    NEXT_RUNTIME: z.enum(["nodejs", "edge"]).default("nodejs"),
    GITHUB_TOKEN: z.string().min(1)
  },

  client: {
    NEXT_PUBLIC_APP_URL: z.url().default("http://localhost:3000"),
    NEXT_PUBLIC_GITHUB_USERNAME: z.string().min(1),
    NEXT_PUBLIC_AVAILABLE_STATUS: z.coerce.boolean(),
  },


  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NEXT_RUNTIME: process.env.NEXT_RUNTIME,
    NEXT_PUBLIC_GITHUB_USERNAME: process.env.NEXT_PUBLIC_GITHUB_USERNAME,
    NEXT_PUBLIC_AVAILABLE_STATUS: process.env.NEXT_PUBLIC_AVAILABLE_STATUS,
    GITHUB_TOKEN: process.env.GITHUB_TOKEN


  },

  emptyStringAsUndefined: true,

});

export default env;
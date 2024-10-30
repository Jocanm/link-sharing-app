import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      authorize: async (credentials) => {
        let user = null;

        if (!user) {
          throw new Error("User not found.");
        }

        return user;
      },
    }),
  ],
} satisfies NextAuthConfig;

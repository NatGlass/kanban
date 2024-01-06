import { env } from '@/env/server';
import type { NextAuthConfig } from "next-auth";
import Github from 'next-auth/providers/github';

export default {
  providers: [
    Github({
      clientId: env.GITHUB_CLIENT_ID,
      clientSecret: env.GITHUB_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig

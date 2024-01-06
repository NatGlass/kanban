import {env} from '@/env/server';
import prisma from '@/lib/prisma';
import {PrismaAdapter} from '@auth/prisma-adapter';
import NextAuth from 'next-auth';
import authConfig from './auth.config';

export const {
  handlers: {GET, POST},
  auth,
  signIn,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  ...authConfig,
  callbacks: {
    async session({session, token}) {
      if (token.sub && session.user) {
        // eslint-disable-next-line no-param-reassign
        session.user.id = token.sub;
      }
      return session;
    },
  },
});

import NextAuth from 'next-auth';

import authConfig from '../auth.config';
import {authRoutes, callbackRoutes} from '../routes';

const {auth} = NextAuth(authConfig);

export default auth(req => {
  const {nextUrl} = req;
  const isLoggedIn = !!req.auth;

  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // Logged in users should not be able to go to auth routes
  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL('/', nextUrl));
    }
    return null;
  }

  // Unauthenticated users cannot go to the dashboard
  if (!isLoggedIn && !callbackRoutes) {
    return Response.redirect(new URL('/api/auth/signin', nextUrl));
  }

  return null;
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)'],
};

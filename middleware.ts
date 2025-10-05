import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Run middleware for all pages except Next.js internals and static files
    '/((?!_next/static|_next/image|favicon.ico).*)',
    // Ensure API routes are always included
    '/api/:path*',
  ],
};

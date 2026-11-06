import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

const proxy = createMiddleware(routing);

export default proxy;
export { proxy };

export const config = {
  // Match all request paths except internal files and static assets
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)']
};

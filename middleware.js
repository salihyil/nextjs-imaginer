import { NextResponse } from 'next/server';
import { applyRateLimit } from './utils/rateLimiting';

export async function middleware(request) {
  const response = NextResponse.next();

  try {
    await applyRateLimit(request, response);
  } catch (error) {
    return new NextResponse('Too Many Request', { status: 429 });
  }

  return response;
}

export const config = {
  matcher: '/api/(.*)',
};

import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

// https://nextjs.org/docs/app/building-your-application/routing/middleware
export async function middleware(request: NextRequest) {
  // console.log('middleware', request)
  const response = NextResponse.next()
  return response
}

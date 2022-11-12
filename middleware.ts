import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { jwtVerify } from 'jose'

export async function middleware(req: NextRequest) {
  const JWT = req.cookies.get('token_name')

  if (JWT) {
    if (req.nextUrl.pathname.includes('/')) {
      try {
        await jwtVerify((JWT as unknown as string), new TextEncoder().encode(`${process.env.SECRET}`))

        return NextResponse.redirect(new URL('/bands', req.url))
      } catch (error) {
        return NextResponse.next()
      }
    }
  }

  return NextResponse.redirect(new URL('/', req.url))
}

export const config = {
  matcher: [
    '/bands',
    '/bands/:path*',
    '/profile'
  ]
}

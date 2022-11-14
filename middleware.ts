import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { jwtVerify } from 'jose'

interface ICoockieGetValue {
  name: string
  value: string
}

export async function middleware(req: NextRequest) {
  const JWT = req.cookies.get('tokenName') as ICoockieGetValue

  if (!JWT) return NextResponse.redirect(new URL('/', req.url))

  try {
    await jwtVerify(JWT.value, new TextEncoder().encode(`${process.env.JWT_SECRET}`))

    return NextResponse.next()
  } catch (error) {
    console.error('ERROR MIDDLEWARE: ', error)

    return NextResponse.redirect(new URL('/', req.url))
  }

}

export const config = {
  matcher: [
    '/bands',
    '/bands/:path*',
    '/profile'
  ]
}

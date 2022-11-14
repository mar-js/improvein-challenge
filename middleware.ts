import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

import { jwtVerify } from 'jose'

interface ICoockieGetValue {
  name: string
  value: string
}

export async function middleware(req: NextRequest) {
  const { value } = req.cookies.get('tokenName') as ICoockieGetValue

  if (!value) return NextResponse.redirect(new URL('/', req.url))

  try {
    await jwtVerify(value, new TextEncoder().encode(`${process.env.NEXT_PUBLIC_JWT_SECRET}`))

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

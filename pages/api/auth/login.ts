import type { NextApiRequest, NextApiResponse } from 'next'

import jwt from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function login(req: NextApiRequest, res: NextApiResponse) {
  const { email, password, username } = req.body

  if (email === 'admin@admin.com' && password === 'admin123') {
    const TOKEN = jwt.sign({
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30,
      email,
      password,
      username
    }, (process.env.NEXT_PUBLIC_JWT_SECRET as string))
    const SERIALIZED = serialize('tokenName', TOKEN, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 1000 * 60 * 60 * 24 * 30,
      path: '/'
    })

    res.setHeader('Set-Cookie', SERIALIZED)

    return res.status(200).json('Login succesfully')
  }

  return res.status(401).json({ error: 'Invalid email or password' })
}

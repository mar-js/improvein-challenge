import type { NextApiRequest, NextApiResponse } from 'next'

import { verify } from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function logout(req: NextApiRequest, res: NextApiResponse) {
  const { tokenName } = req.cookies

  if (!tokenName) return res.status(401).json({ error: 'NOT TOKEN ' })

  try {
    verify((tokenName as string), (process.env.NEXT_PUBLIC_JWT_SECRET as string))
    const SERIALIZED = serialize('tokenName', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })

    res.setHeader('Set-cookie', SERIALIZED)

    return res.status(200).json('Logout succesfully')
  } catch (error) {
    console.error('ERROR LOGOUT: ', error)

    return res.status(401).json({ error: 'Invalid TOKEN' })
  }
}

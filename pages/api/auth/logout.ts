import type { NextApiRequest, NextApiResponse } from 'next'

import { verify } from 'jsonwebtoken'
import { serialize } from 'cookie'

export default function logout(req: NextApiRequest, res: NextApiResponse) {
  const { token_name } = req.cookies

  if (!token_name) return res.status(401).json({ error: 'NOT TOKEN ' })

  try {
    verify((token_name as string), `${process.env.SECRET}`)
    const SERIALIZED = serialize('token_name', '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 0,
      path: '/'
    })

    res.setHeader('Set-cookie', SERIALIZED)

    return res.status(200).json('Logout succesfully')
  } catch (error) {
    return res.status(401).json({ error: 'Invalid TOKEN' })
  }
}

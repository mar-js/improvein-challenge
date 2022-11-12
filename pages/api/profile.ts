import { verify } from 'jsonwebtoken'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function profile(req: NextApiRequest, res: NextApiResponse) {
  const { token_name } = req.cookies

  if (!token_name) return res.status(401).json({ error: 'NOT TOKEN ' })

  try {
    const USER = verify((token_name as string), `${process.env.SECRET}`)

    return res.status(200).json({ USER })
  } catch (error) {
    return res.status(401).json({ error: 'Invalid Token' })
  }
}

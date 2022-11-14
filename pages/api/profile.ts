import type { NextApiRequest, NextApiResponse } from 'next'

import { verify } from 'jsonwebtoken'

export default function profile(req: NextApiRequest, res: NextApiResponse) {
  const { tokenName } = req.cookies

  if (!tokenName) return res.status(401).json({ error: 'NOT TOKEN ' })

  try {
    const { username, email } = (verify((tokenName as string), (process.env.JWT_SECRET as string)) as { username: string; email: string})

    return res.status(200).json({
      username,
      email
    })
  } catch (error) {
    console.error('ERROR PROFILE: ', error)

    return res.status(401).json({ error: 'Invalid Token' })
  }
}

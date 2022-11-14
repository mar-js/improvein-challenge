import { useRouter } from 'next/router'

import { useEffect, useState } from 'react'

import {
  Article,
  Button,
  Subtitle,
  Title
} from './styles'

export const ProfileCard: React.FC = () => {
  const { push } = useRouter()
  const [ user, setUser ] = useState({
    username: '',
    email: ''
  })

  const GET_PROFILE = async () => {
    const RESPONSE = await fetch('/api/profile')
    const { username, email } = await RESPONSE.json() as { username: string; email: string}

    setUser({
      username,
      email
    })
  }

  const HANDLE_LOGOUT = async () => {
    const RESPONSE = confirm('Sure you want to log out?')

    if (RESPONSE) {
      try {
        await fetch('/api/auth/logout')

        setTimeout(() => {
          setUser({
            username: '',
            email: ''
          })
        }, 1000)

        push('/')
      } catch (error) {
        console.error('ERROR LOGOUT: ', error)
      }
    }
  }

  useEffect(() => {
    (() => GET_PROFILE())()
  }, [])

  return (
    <Article>
      <Title>User: { user.username }</Title>
      <Subtitle>Email: { user.email }</Subtitle>
      <Button onClick={ HANDLE_LOGOUT } type="button">Logout</Button>
    </Article>
  )
}

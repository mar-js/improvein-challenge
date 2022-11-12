import { profile_closed } from '@redux/slices/profile'
import { useAppDispatch } from 'hooks/redux'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  Article,
  Button,
  Subtitle,
  Title
} from './styles'

export const ProfileCard: React.FC = () => {
  const DISPATCH = useAppDispatch()
  const { push } = useRouter()
  const [ user, setUser ] = useState({
    username: '',
    email: ''
  })

  const GET_PROFILE = async () => {
    const RESPONSE = await fetch('/api/profile')
    const DATA = await RESPONSE.json()

    setUser(DATA.USER)
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

          DISPATCH(profile_closed())
        }, 1000)
      } catch (error) {
        console.error('ERROR: ', error)
      }

      push('/')
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

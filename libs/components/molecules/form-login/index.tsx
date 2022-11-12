import { profile_login } from '@redux/slices/profile'
import { useAppDispatch } from 'hooks/redux'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import {
  Button,
  Form,
  Input,
  InputGroup,
  Label
} from './styles'

export const FormLogin: React.FC = () => {
  const DISPATCH = useAppDispatch()
  const { push } = useRouter()
  const [ credentials, setCredentials ] = useState({
    email: '',
    password: '',
    username: ''
  })

  const HANDLE_SUBMIT = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const RESPONSE = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
      })
      const { email, username } = credentials

      DISPATCH(profile_login({
        email,
        username
      }))

      if (RESPONSE.status === 200) push('/bands')
    } catch (error) {
      console.error('ERROR ', error)
    }
  }

  const HANDLE_CHANGE = (e: FormEvent) => {
    setCredentials({
      ...credentials,
      [(e.target as HTMLInputElement).name]: (e.target as HTMLInputElement).value
    })
  }

  return (
    <Form onSubmit={ HANDLE_SUBMIT }>
      <InputGroup>
        <Label>Username: </Label>
        <Input
          onChange={ HANDLE_CHANGE }
          type="username"
          name="username"
          required
        />
      </InputGroup>
      <InputGroup>
        <Label>Email: </Label>
        <Input
          onChange={ HANDLE_CHANGE }
          type="email"
          name="email"
          required
        />
      </InputGroup>
      <InputGroup>
        <Label>Password: </Label>
        <Input
          onChange={ HANDLE_CHANGE }
          type="password"
          name="password"
          required
        />
      </InputGroup>
      <Button type="submit">Login</Button>
    </Form>
  )
}

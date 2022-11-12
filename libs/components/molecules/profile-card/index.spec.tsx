import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { DATA_PROFILE_FULL } from '@assets/mocks'
import { IProfile } from '@assets/interfaces'

import { ProfileCard } from './'

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/profile',
      pathname: '/profile',
      query: '',
      asPath: '',
      push: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn()
      },
      beforePopState: jest.fn(() => null),
      prefetch: jest.fn(() => null)
    })
  }
}))

beforeEach(() => {
  React.useEffect = jest.fn()

  global.fetch = jest.fn(() => Promise.resolve({ json: () => Promise.resolve(DATA_PROFILE_FULL) })) as jest.Mock
})

describe('ProfileCard', () => {
  beforeEach(async () => {
    const RESPONSE = await fetch('/api/profile')
    const DATA: IProfile = await RESPONSE.json()

    React.useState = jest.fn().mockReturnValue([ DATA, jest.fn() ])
  })

  it('render', () => {
    const { baseElement } = render(<ProfileCard />)

    expect(baseElement).toBeTruthy()
  })

  it('check data', () => {
    const ELEMENT = render(<ProfileCard />)
    const { getByText } = ELEMENT
    const USERNAME = getByText('User: Pedro')
    const EMAIL = getByText('Email: admin@admin.com')

    expect(USERNAME).toBeTruthy()
    expect(EMAIL).toBeTruthy()
    expect(ELEMENT).toBeTruthy()
  })

  describe('Logout cofirm', () => {
    it('true', () => {
      global.confirm = () => true

      const ELEMENT = render(<ProfileCard />)
      const { getByText } = ELEMENT
      const BUTTON = getByText('Logout')

      fireEvent.click(BUTTON)

      expect(BUTTON).toBeTruthy()
      expect(ELEMENT).toBeTruthy()
    })

    it('false', () => {
      global.confirm = () => false

      const ELEMENT = render(<ProfileCard />)
      const { getByText } = ELEMENT
      const BUTTON = getByText('Logout')

      fireEvent.click(BUTTON)

      expect(BUTTON).toBeTruthy()
      expect(ELEMENT).toBeTruthy()
    })
  })
})

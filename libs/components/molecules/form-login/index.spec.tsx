import { fireEvent, render } from '@testing-library/react'

import { DATA_PROFILE } from '@assets/mocks'

import { FormLogin } from './'

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/',
      pathname: '',
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

describe('FormLogin', () => {
  it('render', () => {
    const { baseElement } = render(<FormLogin />)

    expect(baseElement).toBeTruthy()
  })

  describe('Form', () => {
    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        status: 200,
        json: () => Promise.resolve(DATA_PROFILE)
      })) as jest.Mock
    })

    describe('Form Resolve', () => {
      it('change form', async () => {
        const ELEMENT = render(<FormLogin />)
        const { getByPlaceholderText, getByText } = ELEMENT
        const USERNAME = getByPlaceholderText('Jhon Doe')
        const EMAIL = getByPlaceholderText('jhon@doe.com')
        const PASSWORD = getByPlaceholderText('12345')
        const BUTTON = getByText('Login')

        fireEvent.change(USERNAME, { target: { value: 'Pedro' } })
        fireEvent.change(EMAIL, { target: { value: 'admin@admin.com' } })
        fireEvent.change(PASSWORD, { target: { value: 'admin123' } })
        fireEvent.click(BUTTON)

        expect(ELEMENT).toBeTruthy()
        expect(USERNAME).toBeTruthy()
        expect(EMAIL).toBeTruthy()
        expect(PASSWORD).toBeTruthy()
        expect(BUTTON).toBeTruthy()
      })
    })

    describe('Form Reject', () => {
      beforeEach(async () => {
        fetch.mockRejectedValueOnce(new Error('BREAK'))
      })

      it('change form', async () => {
        const ELEMENT = render(<FormLogin />)
        const { getByPlaceholderText, getByText } = ELEMENT
        const USERNAME = getByPlaceholderText('Jhon Doe')
        const EMAIL = getByPlaceholderText('jhon@doe.com')
        const PASSWORD = getByPlaceholderText('12345')
        const BUTTON = getByText('Login')

        fireEvent.change(USERNAME, { target: { value: 'Pedro' } })
        fireEvent.change(EMAIL, { target: { value: 'admin@admin.com' } })
        fireEvent.change(PASSWORD, { target: { value: 'admin123' } })
        fireEvent.click(BUTTON)

        expect(ELEMENT).toBeTruthy()
        expect(USERNAME).toBeTruthy()
        expect(EMAIL).toBeTruthy()
        expect(PASSWORD).toBeTruthy()
        expect(BUTTON).toBeTruthy()
      })
    })
  })
})

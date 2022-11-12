import { render } from '@testing-library/react'

import { Header } from './'

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

describe('Header', () => {
  it('render', () => {
    const { baseElement } = render(<Header />)

    expect(baseElement).toBeTruthy()
  })
})

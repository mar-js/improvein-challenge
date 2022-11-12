import { fireEvent, render } from '@testing-library/react'

import { Logo } from './'

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

describe('Logo', () => {
  it('render in home', () => {
    const { baseElement } = render(<Logo />)

    expect(baseElement).toBeTruthy()
  })

  it('render out home', () => {
    jest.mock('next/router', () => ({
      useRouter() {
        return ({
          route: '/bands',
          pathname: '/bands'

        })
      }
    }))

    const { baseElement } = render(<Logo />)

    expect(baseElement).toBeTruthy()
  })

  it('render click', () => {
    const { baseElement } = render(<Logo />)

    fireEvent.click(baseElement)

    expect(baseElement).toBeTruthy()
  })
})

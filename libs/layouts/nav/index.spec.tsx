import { render } from '@testing-library/react'

import { Nav } from './'

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/bands',
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

describe('Nav', () => {
  it('render', () => {
    const { baseElement } = render(<Nav />)

    expect(baseElement).toBeTruthy()
  })
})

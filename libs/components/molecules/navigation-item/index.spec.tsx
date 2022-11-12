import { fireEvent, render } from '@testing-library/react'

import { DATA_NAVIGATION } from '@assets/mocks'

import { NavigationItem } from './'

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

describe('NavigationItem', () => {
  it('render', () => {
    const { baseElement } = render(<NavigationItem { ...DATA_NAVIGATION[0] } />)

    expect(baseElement).toBeTruthy()
  })

  it('render click', () => {
    const { baseElement } = render(<NavigationItem { ...DATA_NAVIGATION[0] } />)

    fireEvent.click(baseElement)

    expect(baseElement).toBeTruthy()
  })
})

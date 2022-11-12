import { fireEvent, render } from '@testing-library/react'

import { DATA_BAND } from '@assets/mocks'

import { BandItem } from './'

jest.mock('next/router', () => ({
  useRouter() {
    return ({
      route: '/bands/[id]',
      pathname: '/bands/2',
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

describe('BandDescription', () => {
  it('render', () => {
    const { baseElement } = render(<BandItem { ...DATA_BAND } />)

    expect(baseElement).toBeTruthy()
  })

  it('render click ', () => {
    const { baseElement } = render(<BandItem { ...DATA_BAND } />)

    fireEvent.click(baseElement)

    expect(baseElement).toBeTruthy()
  })
})

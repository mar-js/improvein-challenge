import { DATA_BAND } from '@assets/mocks'
import { fireEvent, render } from '@testing-library/react'
import { ContainerBandDescription } from './'

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

describe('ContainerBandDescription', () => {
  it('render', () => {
    const { baseElement } = render(<ContainerBandDescription band={ DATA_BAND } />)

    expect(baseElement).toBeTruthy()
  })

  it('render click', () => {
    const ELEMENT = render(<ContainerBandDescription band={ DATA_BAND } />)
    const { getByText } = ELEMENT
    const BUTTON = getByText('Back')

    fireEvent.click(BUTTON)

    expect(BUTTON).toBeTruthy()
    expect(ELEMENT).toBeTruthy()
  })
})

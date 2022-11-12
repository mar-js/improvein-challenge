import { render } from '@testing-library/react'

import { Layout } from './'

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

describe('Layout', () => {
  it('render', () => {
    const { baseElement } = render(
      <Layout>
        <p>Hola</p>
      </Layout>
    )

    expect(baseElement).toBeTruthy()
  })
})

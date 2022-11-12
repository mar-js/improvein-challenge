import { render } from '@testing-library/react'

import { Main } from './'

describe('Main', () => {
  it('render', () => {
    const { baseElement } = render(
      <Main>
        <p>Hola</p>
      </Main>
    )

    expect(baseElement).toBeTruthy()
  })
})

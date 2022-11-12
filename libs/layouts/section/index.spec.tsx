import { render } from '@testing-library/react'

import { Section } from './'

describe('Section', () => {
  it('render', () => {
    const { baseElement } = render(
      <Section>
        <p>Hola</p>
      </Section>
    )

    expect(baseElement).toBeTruthy()
  })
})

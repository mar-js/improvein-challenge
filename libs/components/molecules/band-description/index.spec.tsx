import { render } from '@testing-library/react'

import { DATA_BAND } from '@assets/mocks'

import { BandDescription } from './'

describe('BandDescription', () => {
  it('render', () => {
    const { baseElement } = render(<BandDescription { ...DATA_BAND } />)

    expect(baseElement).toBeTruthy()
  })
})

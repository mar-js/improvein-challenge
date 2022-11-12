import { HYDRATE } from 'next-redux-wrapper'

import { IBand } from '@assets/interfaces'

import BANDS_SLICE from '../bands'
import { GET_BANDS } from '../type'

describe('bands', () => {
  const INITIAL_STATE: IBand[] = [
    {
      id: 0,
      name: '',
      genreCode: '',
      year: 0,
      country: '',
      members: [ { name: '' } ]
    }
  ]

  it('render GET_BANDS.type', () => {
    const ACTION = { type: [ GET_BANDS.type ] }
    const STATE = BANDS_SLICE(INITIAL_STATE, ACTION)

    expect(STATE).toEqual([ ...INITIAL_STATE ])
  })

  it('render HYDRATE', () => {
    const ACTION = {
      type: [ HYDRATE ],
      payload: { bands: INITIAL_STATE }
    }
    const STATE = BANDS_SLICE(INITIAL_STATE, ACTION)

    expect(STATE).toEqual([ ...INITIAL_STATE ])
  })
})

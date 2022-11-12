import { HYDRATE } from 'next-redux-wrapper'

import { IBand } from '@assets/interfaces'

import BAND_SLICE from '../band'
import { GET_BAND } from '../type'

describe('band', () => {
  const INITIAL_STATE: IBand = {
    id: 0,
    name: '',
    genreCode: '',
    year: 0,
    country: '',
    members: [ { name: '' } ]
  }

  it('render GET_BAND.type', () => {
    const ACTION = { type: [ GET_BAND.type ] }
    const STATE = BAND_SLICE(INITIAL_STATE, ACTION)

    expect(STATE).toEqual({ ...INITIAL_STATE })
  })

  it('render HYDRATE', () => {
    const ACTION = {
      type: [ HYDRATE ],
      payload: { band: INITIAL_STATE }
    }
    const STATE = BAND_SLICE(INITIAL_STATE, ACTION)

    expect(STATE).toEqual({ ...INITIAL_STATE })
  })
})

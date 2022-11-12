import { HYDRATE } from 'next-redux-wrapper'

import SEARCH_SLICE from '../search'
import { SEARCH_BAND } from '../type'

describe('search', () => {
  const INITIAL_STATE: { search: string } = { search: '' }

  it('render SEARCH_BAND.type', () => {
    const ACTION = { type: [ SEARCH_BAND.type ] }
    const STATE = SEARCH_SLICE(INITIAL_STATE, ACTION)

    expect(STATE).toEqual({ ...INITIAL_STATE })
  })

  it('render HYDRATE', () => {
    const ACTION = {
      type: [ HYDRATE ],
      payload: { ...INITIAL_STATE }
    }
    const STATE = SEARCH_SLICE(INITIAL_STATE, ACTION)

    expect(STATE).toEqual({ ...INITIAL_STATE })
  })
})

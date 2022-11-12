import { HYDRATE } from 'next-redux-wrapper'

import FILTER_SLICE from '../filter'
import { FILTER } from '../type'

describe('filter', () => {
  const INITIAL_STATE: { order: string } = { order: 'default' }

  it('render FILTER.type', () => {
    const ACTION = { type: [ FILTER.type ] }
    const STATE = FILTER_SLICE(INITIAL_STATE, ACTION)

    expect(STATE).toEqual({ ...INITIAL_STATE })
  })

  it('render HYDRATE', () => {
    const ACTION = {
      type: [ HYDRATE ],
      payload: { ...INITIAL_STATE }
    }
    const STATE = FILTER_SLICE(INITIAL_STATE, ACTION)

    expect(STATE).toEqual({ ...INITIAL_STATE })
  })
})

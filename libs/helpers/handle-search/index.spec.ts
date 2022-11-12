import { DATA_BAND, DATA_FECH_BANDS } from '@assets/mocks'

import { handleSearch } from './'

describe('handleSearch', () => {
  it('run', () => {
    const RESULT = handleSearch(DATA_FECH_BANDS, 'kiss')

    expect(RESULT).toEqual(DATA_BAND)
  })

  it('failed', () => {
    const RESULT = handleSearch(DATA_FECH_BANDS, 'pedro')

    expect(RESULT).toEqual(undefined)
  })
})

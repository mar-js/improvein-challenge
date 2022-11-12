import { DATA_FECH_BANDS } from '@assets/mocks'

import { handleHydrateDataBand } from '.'

describe('handleHydrateDataBand', () => {
  const COPY = DATA_FECH_BANDS

  it('run', () => {
    const RESULT = handleHydrateDataBand(DATA_FECH_BANDS, COPY)

    expect(RESULT).toBeTruthy()
  })

  it('run asc', () => {
    const RESULT = handleHydrateDataBand(DATA_FECH_BANDS, COPY, 'asc')

    expect(RESULT).toBeTruthy()
  })

  it('run des', () => {
    const RESULT = handleHydrateDataBand(DATA_FECH_BANDS, COPY, 'des')

    expect(RESULT).toBeTruthy()
  })

  it('run year', () => {
    const RESULT = handleHydrateDataBand(DATA_FECH_BANDS, COPY, 'year')

    expect(RESULT).toBeTruthy()
  })
})

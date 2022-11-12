import { IBand } from '@assets/interfaces'
import { DATA_BAND, DATA_FECH_BANDS } from '@assets/mocks'

import { getBands } from './'

describe('getBands', () => {
  describe('Data Bands', () => {
    let saveData: IBand[] | []

    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(DATA_FECH_BANDS)
      })) as jest.Mock
    })

    describe('Promise Resolve', () => {
      beforeEach(async () => {
        saveData = (await getBands('bands')) as IBand[] | []
      })

      it('run', async () => {
        expect(saveData).toEqual(DATA_FECH_BANDS)
      })
    })

    describe('Promise Reject', () => {
      beforeEach(async () => {
        fetch.mockRejectedValueOnce(new Error('BREAK'))

        saveData = (await getBands('bands')) as IBand[] | []
      })

      it('run', async () => {
        expect(saveData).toEqual(null)
      })
    })
  })

  describe('Data Band', () => {
    let saveData: IBand

    beforeEach(() => {
      global.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve(DATA_BAND)
      })) as jest.Mock
    })

    describe('Promise Resolve', () => {
      beforeEach(async () => {
        saveData = (await getBands('band/1')) as IBand
      })

      it('run', async () => {
        expect(saveData).toEqual(DATA_BAND)
      })
    })

    describe('Promise Reject', () => {
      beforeEach(async () => {
        fetch.mockRejectedValueOnce(new Error('BREAK'))

        saveData = (await getBands('band')) as IBand
      })

      it('run', async () => {
        expect(saveData).toEqual(null)
      })
    })
  })
})

import { HYDRATE } from 'next-redux-wrapper'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IBand } from '@assets/interfaces'

import { GET_BAND } from '../type'

const INITIAL_STATE: IBand = {
  id: 0,
  name: '',
  genreCode: '',
  year: 0,
  country: '',
  members: [ { name: '' } ]
}

type TAction = {
  payload: {
    band: IBand
  }
}

const BAND_SLICE = createSlice({
  name: 'band',
  initialState: INITIAL_STATE,
  reducers: { [GET_BAND.type]: (state, action: PayloadAction<IBand>) => ({ ...action.payload }) },
  extraReducers: builder =>
    builder
      .addCase(HYDRATE, (state, action) => ({ ...(action as unknown as TAction).payload.band }))
})

export const { get_band } = BAND_SLICE.actions
export default BAND_SLICE.reducer

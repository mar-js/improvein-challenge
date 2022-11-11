import { IBand } from '@assets/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { GET_BAND } from './type'
import { HYDRATE } from 'next-redux-wrapper'

const INITIAL_STATE: IBand = {
  id: 0,
  name: '',
  genreCode: '',
  year: 0,
  country: '',
  members: [ { name: '' } ]
}

const BAND_SLICE = createSlice({
  name: 'band',
  initialState: INITIAL_STATE,
  reducers: { [GET_BAND.type]: (state, action: PayloadAction<IBand>) => ({ ...action.payload }) },
  extraReducers: builder =>
    builder
      .addCase(HYDRATE, (state, action) => ({ ...action.payload.band }))
})

export const { get_band } = BAND_SLICE.actions
export default BAND_SLICE.reducer

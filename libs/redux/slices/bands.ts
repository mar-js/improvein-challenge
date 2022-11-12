import { HYDRATE } from 'next-redux-wrapper'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IBand } from '@assets/interfaces'

import { GET_BANDS } from './type'

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

const BANDS_SLICE = createSlice({
  name: 'bands',
  initialState: INITIAL_STATE,
  reducers: { [GET_BANDS.type]: (state, action: PayloadAction<IBand[]>) => [ ...action.payload ] },
  extraReducers: builder =>
    builder
      .addCase(HYDRATE, (state, action) => [ ...action.payload.bands ])
})

export const { get_bands } = BANDS_SLICE.actions
export default BANDS_SLICE.reducer

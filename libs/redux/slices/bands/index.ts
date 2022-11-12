import { HYDRATE } from 'next-redux-wrapper'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IBand } from '@assets/interfaces'

import { GET_BANDS } from '../type'

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

type TAction = {
  payload: {
    bands: IBand[]
  }
}

const BANDS_SLICE = createSlice({
  name: 'bands',
  initialState: INITIAL_STATE,
  reducers: { [GET_BANDS.type]: (state, action: PayloadAction<IBand[]>) => [ ...action.payload ] },
  extraReducers: builder =>
    builder
      .addCase(HYDRATE, (state, action) => [ ...(action as unknown as TAction).payload.bands ])
})

export const { get_bands } = BANDS_SLICE.actions
export default BANDS_SLICE.reducer

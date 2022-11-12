import { HYDRATE } from 'next-redux-wrapper'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SEARCH_BAND } from '../type'

const INITIAL_STATE: { searchText: string } = { searchText: '' }

type TAction = {
  payload: {
    searchText: string
  }
}

const SEARCH_SLICE = createSlice({
  name: 'search',
  initialState: INITIAL_STATE,
  reducers: {
    [SEARCH_BAND.type]: (state, action: PayloadAction<string>) => ({
      ...state,
      searchText: action.payload
    })
  },
  extraReducers: builder =>
    builder
      .addCase(HYDRATE, (state, action) => ({ searchText: (action as unknown as TAction).payload.searchText }))
})

export const { search_band } = SEARCH_SLICE.actions
export default SEARCH_SLICE.reducer

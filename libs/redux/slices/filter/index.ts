import { HYDRATE } from 'next-redux-wrapper'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { FILTER } from '../type'

const INITIAL_STATE: { order: string } = { order: 'default' }

type TAction = {
  payload: {
    order: string
  }
}

const FILTER_SLICE = createSlice({
  name: 'filter',
  initialState: INITIAL_STATE,
  reducers: {
    [FILTER.type]: (state, action: PayloadAction<string>) => ({
      ...state,
      order: action.payload
    })
  },
  extraReducers: builder =>
    builder
      .addCase(HYDRATE, (state, action) => ({ order: (action as unknown as TAction).payload.order }))
})

export const { filter } = FILTER_SLICE.actions
export default FILTER_SLICE.reducer

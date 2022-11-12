import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import { createWrapper } from 'next-redux-wrapper'

import bands from './slices/bands'
import band from './slices/band'
import filter from './slices/filter'
import search from './slices/search'
import profile from './slices/profile'

export const STORE = configureStore({
  reducer: {
    bands,
    band,
    filter,
    search,
    profile
  }
})

export type RootState = ReturnType<typeof STORE.getState>
export type AppDispatch = typeof STORE.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action>;

export const WRAPPER = createWrapper(() => STORE)

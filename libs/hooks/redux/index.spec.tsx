import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

import { renderHook } from '@testing-library/react'

import { IChildren } from '@assets/interfaces'
import { DATA_BAND } from '@assets/mocks'

import { GET_BAND } from '@redux/slices/type'

import { useAppDispatch, useAppSelector } from './'

describe('Hooks Redux', () => {
  const reducerSlice = createSlice({
    name: 'band',
    initialState: DATA_BAND,
    reducers: { [GET_BAND.type]: (state) => state }
  })
  const mockStore = configureStore({ reducer: { band: reducerSlice.reducer } })
  const wrapper = ({ children }: IChildren) => <Provider store={ mockStore }>{ children }</Provider>

  it('run useAppDispatch', () => {

    const { result } = renderHook(() => useAppDispatch(), { wrapper })

    act(() => {
      result.current(reducerSlice.actions.get_band())
    })

    expect(result.current(reducerSlice.actions.get_band())).toEqual({ type: 'band/get_band' })
  })

  it('run useAppSelector', () => {
    const { result } = renderHook(() => useAppSelector(state => state.band), { wrapper })

    expect(result.current).toEqual(DATA_BAND)
  })
})

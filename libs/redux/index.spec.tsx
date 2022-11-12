import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils'

import { render } from '@testing-library/react'

import { IBand, IChildren } from '@assets/interfaces'
import { DATA_BAND } from '@assets/mocks'

import { GET_BAND } from './slices/type'

import { STORE } from './store'

describe('Redux', () => {
  const reducerSlice = createSlice({
    name: 'band',
    initialState: DATA_BAND,
    reducers: { [GET_BAND.type]: (state) => state }
  })
  const mockStore = configureStore({ reducer: { band: reducerSlice.reducer } })
  const Wrapper = ({ children }: IChildren) => <Provider store={ mockStore }>{ children }</Provider>
  const renderWithContext = (element: JSX.Element) => {
    render(
      <Provider store={ STORE }>{ element }</Provider>
    )

    return { STORE }
  }
  it('render', () => {
    const { baseElement } = render(<Wrapper><p>Hola</p></Wrapper>)

    expect(baseElement).toBeTruthy()
  })

  it('render', () => {
    const INITIAL_STATE: IBand = {
      id: 0,
      name: '',
      genreCode: '',
      year: 0,
      country: '',
      members: [ { name: '' } ]
    }
    const { STORE } = renderWithContext(<p>Hola</p>)

    act(() => {
      STORE.dispatch({
        type: [ GET_BAND.type ],
        payload: DATA_BAND
      })
    })

    expect(STORE.getState().band).toEqual(INITIAL_STATE)
  })
})

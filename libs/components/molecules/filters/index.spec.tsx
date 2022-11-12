import { Provider } from 'react-redux'
import { fireEvent, render } from '@testing-library/react'

import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit'

import { SEARCH_BAND } from '@redux/slices/type'

import { IChildren } from '@assets/interfaces'

import { Filters } from './'

describe('Filters', () => {
  const reducerSlice = createSlice({
    name: 'search',
    initialState: '',
    reducers: { [SEARCH_BAND.type]: (state, action: PayloadAction<string>) => ({ searchText: action.payload }) }
  })
  const mockStore = configureStore({ reducer: { search: reducerSlice.reducer } })
  const Wrapper = ({ children }: IChildren) => <Provider store={ mockStore }>{ children }</Provider>

  it('render', () => {
    const { baseElement } = render(
      <Wrapper>
        <Filters />
      </Wrapper>
    )

    expect(baseElement).toBeTruthy()
  })

  it('Search', () => {
    const ELEMENT = render(
      <Wrapper>
        <Filters />
      </Wrapper>
    )
    const { getByPlaceholderText, getByText } = ELEMENT
    const SEARCH_INPUT = getByPlaceholderText('Search...')
    const SEARCH_BUTTON = getByText('Search')

    fireEvent.change(SEARCH_INPUT, { target: { value: 'kiss' } })
    fireEvent.click(SEARCH_BUTTON)

    expect(SEARCH_INPUT).toBeTruthy()
    expect(SEARCH_BUTTON).toBeTruthy()
    expect(ELEMENT).toBeTruthy()
  })

  it('Reset', () => {
    const ELEMENT = render(
      <Wrapper>
        <Filters />
      </Wrapper>
    )
    const { getByText } = ELEMENT
    const BUTTON = getByText('Reset')

    fireEvent.click(BUTTON)

    expect(BUTTON).toBeTruthy()
    expect(ELEMENT).toBeTruthy()
  })

  it('Select option', () => {
    const ELEMENT = render(
      <Wrapper>
        <Filters />
      </Wrapper>
    )
    const { queryAllByTestId } = ELEMENT
    const SELECT = queryAllByTestId('select')

    fireEvent.change(SELECT[0], { target: { value: 'asc' } })

    expect(SELECT[0].selected).toBeTruthy()
    expect(ELEMENT).toBeTruthy()
  })
})

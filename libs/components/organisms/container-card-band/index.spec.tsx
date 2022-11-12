import React from 'react'
import { Provider } from 'react-redux'
import { render } from '@testing-library/react'

import { configureStore } from '@reduxjs/toolkit'

import bands from '@redux/slices/bands'
import band from '@redux/slices/band'
import filter from '@redux/slices/filter'
import search from '@redux/slices/search'

import { IChildren } from '@assets/interfaces'

import { ContainerCardBand } from './'

beforeEach(() => {
  React.useEffect = jest.fn()
})

describe('ContainerCardBand', () => {
  const mockStore = configureStore({
    reducer: {
      bands,
      band,
      filter,
      search
    }
  })
  const Wrapper = ({ children }: IChildren) => <Provider store={ mockStore }>{ children }</Provider>

  it('render', () => {
    const { baseElement } = render(
      <Wrapper>
        <ContainerCardBand />
      </Wrapper>
    )

    expect(baseElement).toBeTruthy()
  })
})

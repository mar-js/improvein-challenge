import { FormEvent, useState } from 'react'

import { FILTERS } from '@assets/data-static'

import { useAppDispatch, useAppSelector } from '@hooks/redux'

import { filter } from '@redux/slices/filter'
import { search_band } from '@redux/slices/search'

import {
  ContainerFilters,
  Form,
  Input,
  Option,
  Button,
  Select
} from './styles'

export const Filters: React.FC = () => {
  const { searchText } = useAppSelector(state => state.search)
  const DISPATCH = useAppDispatch()
  const [ searchTextTextInput, setSearchTextInput ] = useState(searchText || '')

  const HANDLE_SUBMIT = (e: FormEvent) => {
    e.preventDefault()

    DISPATCH(search_band(searchTextTextInput))

    setSearchTextInput('')
  }

  const HANDLE_CHANGE = (e: FormEvent) => setSearchTextInput((e.target as HTMLInputElement).value)

  const HANDLE_RESET = () => {
    DISPATCH(filter('default'))
    DISPATCH(search_band(''))
  }

  return (
    <ContainerFilters>
      <Form onSubmit={ HANDLE_SUBMIT }>
        <Input
          onChange={ HANDLE_CHANGE }
          type="text"
          name="search"
          placeholder="Search..."
          required
          minLength={ 3 }
          value={ searchTextTextInput }
        />
        <Button type="submit" >Search</Button>
      </Form>
      <Select defaultValue="default" name="select" onChange={ (e: FormEvent) => DISPATCH(filter((e.target as HTMLInputElement).value)) }>
        <Option value="default">Filters</Option>
        { FILTERS.map(({ id, option, value }) => (
          <Option data-testid="select" key={ id } value={ value }>{ option }</Option>
        )) }
      </Select>
      <Button type="button" onClick={ HANDLE_RESET }>Reset</Button>
    </ContainerFilters>
  )
}

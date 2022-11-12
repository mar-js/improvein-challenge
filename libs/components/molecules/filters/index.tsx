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
  const { search } = useAppSelector(state => state.search)
  const DISPATCH = useAppDispatch()
  const [ searchText, setSearchText ] = useState(search)

  const HANDLE_SUBMIT = (e: FormEvent) => {
    e.preventDefault()

    DISPATCH(search_band(searchText))

    setSearchText('')
  }

  const HANDLE_CHANGE = (e: FormEvent) => (e.target as HTMLInputElement).value.length > 3 && setSearchText((e.target as HTMLInputElement).value)

  const HANDLE_RESET = () => {
    DISPATCH(filter('default'))
    DISPATCH(search_band(''))
  }

  return (
    <ContainerFilters>
      <Form onSubmit={ HANDLE_SUBMIT }>
        <Input
          onChange={ HANDLE_CHANGE }
          type="search"
          name="search"
          placeholder="Search..."
        />
        <Button type="submit" >Search</Button>
      </Form>
      <Select name="select" onChange={ (e: FormEvent) => DISPATCH(filter((e.target as HTMLInputElement).value)) }>
        <Option value="default" selected>Filters</Option>
        { FILTERS.map(({ id, option, value }) => (
          <Option key={ id } value={ value }>{ option }</Option>
        )) }
      </Select>
      <Button type="button" onClick={ HANDLE_RESET }>Reset</Button>
    </ContainerFilters>
  )
}

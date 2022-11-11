import { FILTERS } from '@assets/data-static'
import { useAppDispatch, useAppSelector } from 'hooks/redux'
import { FormEvent, useState } from 'react'
import { filter } from 'redux/slices/filter'
import { search_band } from 'redux/slices/search'
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
  }

  const HANDLE_CHANGE = (e: FormEvent) => (e.target as HTMLInputElement).value.length > 3 && setSearchText((e.target as HTMLInputElement).value)

  return (
    <ContainerFilters>
      <Form onSubmit={ HANDLE_SUBMIT }>
        <Input
          onChange={ HANDLE_CHANGE }
          type="search"
          name="search"
          placeholder="Search..."
        />
        <Button type="submit">Search</Button>
      </Form>
      <Select name="select" onChange={ (e: FormEvent) => DISPATCH(filter(e.target.value)) }>
        <Option value="default" selected>Filters</Option>
        { FILTERS.map(({ id, option, value }) => (
          <Option key={ id } value={ value }>{ option }</Option>
        )) }
      </Select>
      <Button type="button" onClick={ () => DISPATCH(filter('default')) }>Reset</Button>
    </ContainerFilters>
  )
}

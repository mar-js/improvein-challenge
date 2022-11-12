import { IFilters, INavigation } from '@assets/interfaces'

export const NAVIGATION: INavigation[] = [
  {
    id: 1,
    name: 'Profile',
    url: '/profile'
  }
]

export const FILTERS: IFilters[] = [
  {
    id: 1,
    option: 'Upward',
    value: 'asc'
  },
  {
    id: 2,
    option: 'Falling',
    value: 'des'
  },
  {
    id: 3,
    option: 'By year',
    value: 'year'
  }
]

export const SORT_VALUES: string[] = [
  'asc',
  'des',
  'year'
]

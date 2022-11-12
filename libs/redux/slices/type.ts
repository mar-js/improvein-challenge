import { createAction } from '@reduxjs/toolkit'

import { IProfile, IBand } from '@assets/interfaces'

export const GET_BANDS = createAction<IBand[], 'get_bands'>('get_bands')
export const GET_BAND = createAction<IBand, 'get_band'>('get_band')
export const SEARCH_BAND = createAction<string, 'search_band'>('search_band')
export const FILTER = createAction<string, 'filter'>('filter')
export const PROFILE_LOGIN = createAction<IProfile, 'profile_login'>('profile_login')
export const PROFILE_CLOSED = createAction<null, 'profile_closed'>('profile_closed')

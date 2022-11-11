import { IAuth, IBand } from '@assets/interfaces'
import { createAction } from '@reduxjs/toolkit'

export const GET_BANDS = createAction<IBand[], 'get_bands'>('get_bands')
export const GET_BAND = createAction<IBand, 'get_band'>('get_band')
export const SEARCH_BAND = createAction<string, 'search_band'>('search_band')
export const FILTER = createAction<string, 'filter'>('filter')
export const AUTH_LOGIN = createAction<IAuth, 'auth_login'>('auth_login')
export const AUTH_CLOSED = createAction<null, 'auth_closed'>('auth_closed')

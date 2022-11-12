import { IProfile } from '@assets/interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PROFILE_CLOSED, PROFILE_LOGIN } from './type'
import { HYDRATE } from 'next-redux-wrapper'

const INITIAL_STATE: IProfile = {
  username: '',
  email: ''
}

const PROFILE_SLICE = createSlice({
  name: 'profile',
  initialState: INITIAL_STATE,
  reducers: {
    [PROFILE_LOGIN.type]: (state, action: PayloadAction<IProfile>) => ({ ...action.payload }),
    [PROFILE_CLOSED.type]: (state) => {
      state.email = null
      state.username = null
    }
  },
  extraReducers: builder =>
    builder
      .addCase(HYDRATE, (state, action) => ({ ...action.payload.profile }))
})

export const { profile_login, profile_closed } = PROFILE_SLICE.actions
export default PROFILE_SLICE.reducer

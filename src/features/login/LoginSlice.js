import { createSlice } from '@reduxjs/toolkit'
import Storage from '../../utils/Storage'

const LoginSlice = createSlice({
  name: 'login',
  initialState: {
    userName: 'guest',
    password: 'password',
    isUserLoggedIn: false,
    isValidUser: true,
  },
  reducers: {
    userNameChange: (state, action) => {
      const userName = action.payload
      state.userName = userName
      state.userName === 'guest' && state.password === 'password'
        ? (state.isValidUser = true)
        : (state.isValidUser = false)
    },
    passwordChange: (state, action) => {
      const password = action.payload
      state.password = password
      state.userName === 'guest' && state.password === 'password'
        ? (state.isValidUser = true)
        : (state.isValidUser = false)
    },
    userLogin: (state) => {
      const { userName, password } = state
      state.isUserLoggedIn = true

      const expiresAt = JSON.stringify(86400 * 1000 + new Date().getTime())

      Storage.set('userName', userName)
      Storage.set('password', password)
      Storage.set('expires_at', expiresAt)
    },
    userLogout: (state) => {
      state.isUserLoggedIn = false
      Storage.remove('userName')
      Storage.remove('password')
      Storage.remove('expires_at')
    },
  },
})

export const {
  userNameChange,
  passwordChange,
  userLogin,
  userLogout,
} = LoginSlice.actions
export const userDetail = (state) => state.login
export default LoginSlice.reducer

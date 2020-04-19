import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from '../features/login/LoginSlice'
import NoteReducer from '../features/notes/reducers/index'

export const reducer = {
  login: LoginSlice,
  gnotes: NoteReducer,
}

export default configureStore({
  reducer,
  devTools: true,
})

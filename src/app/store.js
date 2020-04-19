import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from '../features/login/LoginSlice'
import NoteReducer from '../features/notes/reducers/index'

export default configureStore({
  reducer: {
    login: LoginSlice,
    gnotes: NoteReducer,
  },
  devTools: true,
})

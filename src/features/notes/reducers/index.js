import { combineReducers } from 'redux'
import InputReducer from './InputReducer'
import NoteReducer from './NoteReducer'

export default combineReducers({
  notes: NoteReducer,
  input: InputReducer,
})

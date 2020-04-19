import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from './Action'

const actionCreators = {
  addNote: (note) => ({
    type: ADD_NOTE,
    note,
  }),

  updateNote: (note, index) => ({
    type: UPDATE_NOTE,
    note,
    index,
  }),

  deleteNote: (index) => ({
    type: DELETE_NOTE,
    index,
  }),
}

export default actionCreators

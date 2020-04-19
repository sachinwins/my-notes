import { ADD_NOTE, UPDATE_NOTE, DELETE_NOTE } from '../actions/Action'

const defaultState = {
  // notes: [
  //     {title:"Title 1", id: 1, content:"Note 1 Content goes here"},
  //     {title:"Title 2", id: 2, content:"Note 2 Content goes here"},
  //     {title:"Title 3", id: 3, content:"Note 3 Content goes here"}
  // ]
  notes: [],
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case ADD_NOTE: {
      const notes = [...state.notes]
      const newNote = action.note
      notes.push(newNote)
      return { notes }
    }
    case UPDATE_NOTE: {
      const { note, index } = action
      const notes = [...state.notes]
      notes[index] = note
      return { notes }
    }
    case DELETE_NOTE: {
      const { index } = action
      const notes = []
      state.notes.forEach((note, id) => {
        if (id !== index) {
          notes.push(note)
        }
      })
      return { notes }
    }
    default:
      return state
  }
}

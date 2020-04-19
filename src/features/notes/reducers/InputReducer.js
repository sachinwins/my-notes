import {
  SET_TITLE,
  SET_CONTENT,
  RESET_DETAILS,
  SET_ID,
} from '../actions/InputAction'

const defaultState = {
  title: '',
  content: '',
  id: -1,
}
export default (state = defaultState, action) => {
  switch (action.type) {
    case SET_TITLE: {
      const { title } = action
      return { ...state, title }
    }
    case SET_CONTENT: {
      const { content } = action
      return { ...state, content }
    }
    case RESET_DETAILS: {
      return { ...defaultState }
    }
    case SET_ID: {
      const { id } = action
      return { ...state, id }
    }
    default:
      return state
  }
}

import { SET_TITLE, SET_CONTENT, RESET_DETAILS, SET_ID } from './InputAction'

const InputActionCreators = {
  setTitle: (title) => ({
    type: SET_TITLE,
    title,
  }),
  setContent: (content) => ({
    type: SET_CONTENT,
    content,
  }),

  resetDetails: () => ({
    type: RESET_DETAILS,
  }),

  setId: (id) => ({
    type: SET_ID,
    id,
  }),
}

export default InputActionCreators

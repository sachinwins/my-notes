import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TextareaAutosize, TextField, Button } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import '../Note.scss'
import actionCreators from '../actions/ActionCreator'
import InputActionCreators from '../actions/InputActionCreator'

const AddNote = () => {
  const { addNote, updateNote, deleteNote } = actionCreators
  const { setTitle, setContent, resetDetails } = InputActionCreators
  const displayAddNoteSection = () => {
    document.getElementById('AddInputSection').style.visibility = 'visible'
  }
  const title = useSelector((state) => state.gnotes.input.title)
  const content = useSelector((state) => state.gnotes.input.content)
  const index = useSelector((state) => state.gnotes.input.id)

  const dispatch = useDispatch()
  const addNoteItem = () => {
    if (title && content) {
      dispatch(addNote({ title, content }))
      dispatch(resetDetails())
    }
  }
  const updateNoteItem = () => {
    if (title && content) {
      dispatch(updateNote({ title, content }, index))
      dispatch(resetDetails())
    }
  }
  const deleteNoteItem = () => {
    dispatch(deleteNote(index))
    dispatch(resetDetails())
  }

  return (
    <div className="addNote-Container">
      <div className="btn-Container">
        <Button variant="outlined" onClick={displayAddNoteSection}>
          <AddIcon />
          Add Note
        </Button>
      </div>
      <div id="AddInputSection" className="hide">
        <h3> Title </h3>
        <TextField
          id="outlined-basic"
          value={title || ''}
          onChange={(e) => dispatch(setTitle(e.target.value))}
          variant="outlined"
        />
        <h3> Content </h3>
        <TextareaAutosize
          variant="outlined"
          value={content || ''}
          onChange={(e) => dispatch(setContent(e.target.value))}
          rowsMin={16}
          className="content"
        />
        <div className="btn-Container">
          {index !== -1 && (
            <Button
              onClick={deleteNoteItem}
              className="deletebutton"
              variant="contained"
              color="primary"
            >
              Delete
            </Button>
          )}
          <Button
            onClick={index === -1 ? addNoteItem : updateNoteItem}
            variant="contained"
            color="primary"
          >
            {index === -1 ? 'Add Note' : 'Update Note'}
          </Button>
        </div>
      </div>
    </div>
  )
}
export default AddNote

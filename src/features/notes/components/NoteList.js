import React from 'react'
import { ListItemText } from '@material-ui/core'

const NoteList = ({ note, index }) => {
  return (
    <>
      <ListItemText primary={note.title} />
      <ListItemText secondary={note.content} />
    </>
  )
}
export default NoteList

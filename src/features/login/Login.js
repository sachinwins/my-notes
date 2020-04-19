import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import {
  userNameChange,
  passwordChange,
  userLogin,
  userDetail,
} from './LoginSlice'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Login = (props) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const { userName, password, isValidUser, isUserLoggedIn } = useSelector(
    userDetail
  )

  const checkDisabled = () => {
    return isValidUser ? false : true
  }
  if (isUserLoggedIn) props.history.push('/notes')
  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <TextField
          autoFocus
          variant="outlined"
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          value={userName}
          onChange={(e) => {
            dispatch(userNameChange(e.target.value))
          }}
          autoComplete="email"
        />
        <TextField
          variant="outlined"
          margin="normal"
          required
          fullWidth
          name="password"
          value={password}
          label="Password"
          type="password"
          id="password"
          onChange={(e) => {
            dispatch(passwordChange(e.target.value))
          }}
          autoComplete="current-password"
        />
        <Button
          disabled={checkDisabled()}
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={() => {
            dispatch(userLogin())
          }}
        >
          Sign In
        </Button>
      </div>
    </Container>
  )
}

export default withRouter(Login)

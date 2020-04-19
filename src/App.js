import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import store from './app/store'
import { Provider } from 'react-redux'
import Container from '@material-ui/core/Container'
import Login from './features/login/Login'
import Notes from './features/notes/Notes'

import './App.scss'

const PageNotFound = () => {
  return (
    <div className="PageNotFound">
      <h1>Page Not found.</h1>
      <a href="/">Back to Home</a>
    </div>
  )
}

const App = () => {
  return (
    <Provider store={store}>
      <Container component="main">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/notes" component={Notes} />
            <Route component={PageNotFound} />
          </Switch>
        </BrowserRouter>
      </Container>
    </Provider>
  )
}

export default App

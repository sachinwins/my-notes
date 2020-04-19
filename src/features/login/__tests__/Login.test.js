import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import Login from '../Login'
import { Provider } from 'react-redux'
import store from '../../../App/store'

describe('Login Component ', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <Login />
    </Provider>
  )

  test('renders Login component', () => {
    expect(getAllByText('Email Address'))
    expect(getAllByText('Password'))
    expect(getAllByText('Sign In'))
  })
  test('It should match with snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Login />
        </Provider>
      )
      .toJSON()
    expect(Login).toMatchSnapshot()
  })
})

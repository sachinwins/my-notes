import React from 'react'
import { render } from '@testing-library/react'
import AddNote from '../components/AddNote'
import { Provider } from 'react-redux'
import store from '../../../App/store'

describe('AddNote Component ', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <AddNote />
    </Provider>
  )

  test('renders AddNote component', () => {
    expect(getAllByText('Title'))
    expect(getAllByText('Content'))
    expect(getAllByText('Add Note'))
  })
})

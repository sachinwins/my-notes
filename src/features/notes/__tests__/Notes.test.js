import React from 'react'
import { render } from '@testing-library/react'
import Notes from '../Notes'
import { Provider } from 'react-redux'
import store from '../../../App/store'

describe('Notes component', () => {
  const { getAllByText } = render(
    <Provider store={store}>
      <Notes />
    </Provider>
  )
  test('renders Notes component successfully ', () => {
    expect(getAllByText('G Notes'))
    expect(getAllByText('Title'))
    expect(getAllByText('Content'))
  })
})

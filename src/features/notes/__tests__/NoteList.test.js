import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'
import NoteList from '../components/NoteList'
import { Provider } from 'react-redux'
import store from '../../../app/store'

describe('NoteList Component ', () => {
  const props = {
    note: { title: 'Note 1', content: 'Content 1' },
    index: 0,
  }

  const { getAllByText } = render(
    <Provider store={store}>
      <NoteList {...props} />
    </Provider>
  )
  test('renders AddNote component', () => {
    expect(getAllByText('Note 1'))
    expect(getAllByText('Content 1'))
  })
  test('It should match with snapshot', () => {
    const tree = renderer.create(<NoteList {...props} />).toJSON()
    expect(NoteList).toMatchSnapshot()
  })
})

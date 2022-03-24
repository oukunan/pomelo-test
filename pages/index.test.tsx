import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Home from './'
import { mockArticle } from '../mocks'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '',
      query: '',
      asPath: '',
    }
  },
}))

it('not renders the umber of search results', () => {
  render(<Home articles={[]} />)

  expect(screen.queryByText(/results for/i)).toBeNull()
})

it('renders the number of search results when starting search and article matched', () => {
  const { baseElement } = render(
    <Home
      articles={[
        { ...mockArticle, id: 1, title: 'A', abstract: 'Hmm' },
        { ...mockArticle, id: 2, title: 'B', abstract: 'Hmm' },
        { ...mockArticle, id: 3, title: 'C', abstract: 'ahhhhh' },
      ]}
    />
  )

  const searchInput = baseElement.querySelector(
    '.ax-search_input'
  ) as HTMLInputElement

  userEvent.click(searchInput)

  expect(searchInput).toHaveFocus()
  userEvent.type(searchInput, 'a')

  const searchResult = screen.queryByText(/results for/i)
  expect(searchResult).not.toBeNull()
  expect(searchResult).toHaveTextContent('Showing 2 results for')
})

it('renders the number of search results when starting search but NO matched', () => {
  const { baseElement } = render(
    <Home
      articles={[
        { ...mockArticle, id: 1, title: 'A', abstract: 'Hmm' },
        { ...mockArticle, id: 2, title: 'B', abstract: 'Hmm' },
        { ...mockArticle, id: 3, title: 'C', abstract: 'ahhhhh' },
      ]}
    />
  )

  const searchInput = baseElement.querySelector(
    '.ax-search_input'
  ) as HTMLInputElement

  userEvent.click(searchInput)

  expect(searchInput).toHaveFocus()
  userEvent.type(searchInput, 'random string and should match')

  const searchResult = screen.queryByText(/results for/i)
  expect(searchResult).toBeNull()
})

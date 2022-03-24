import { render, screen } from '@testing-library/react'

import ArticleList from '../components/ArticleList'
import { mockArticle } from '../mocks'

it('returns `No articles found` message when has no articles', () => {
  render(<ArticleList articles={[]} />)
  expect(screen.queryByText('No articles found')).toBeInTheDocument()
})

it('return list of articles when articles are available', () => {
  const { baseElement } = render(<ArticleList articles={[mockArticle]} />)

  expect(
    baseElement.querySelector('.ax-article-list__container')
  ).toBeInTheDocument()
})

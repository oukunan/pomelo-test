import { render } from '@testing-library/react'
import ArticleDetails from '../pages/article/[articleUriId]'
import { MockArticlesDoc } from '../mocks'

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

it('renders error message when isError props is true', () => {
  const { baseElement } = render(<ArticleDetails isError docs={[]} />)

  expect(
    baseElement.querySelector('.ax-article-details__error_message')?.textContent
  ).toBe('Cannot retrieve your article. Please try again later.')
})

it('renders articles content correctly', () => {
  const { baseElement } = render(<ArticleDetails docs={[MockArticlesDoc]} />)

  expect(
    baseElement.querySelector('.ax-article__section_name')?.textContent
  ).toBe(MockArticlesDoc.section_name)
  expect(baseElement.querySelector('.ax-article__header')?.textContent).toBe(
    MockArticlesDoc.headline.main
  )
  expect(baseElement.querySelector('.ax-article__abstract')?.textContent).toBe(
    MockArticlesDoc.abstract
  )
  expect(baseElement.querySelector('.ax-article__original')?.textContent).toBe(
    MockArticlesDoc.byline.original
  )

  expect(baseElement.querySelector('.ax-article__pub_date')?.textContent).toBe(
    `Published: ${new Date(MockArticlesDoc.pub_date).toDateString()}`
  )
  expect(
    baseElement.querySelector('.ax-article__lead_paragraph')?.textContent
  ).toBe(MockArticlesDoc.lead_paragraph)

  expect(
    baseElement.querySelector('.ax_article__web_url')?.getAttribute('href')
  ).toBe(MockArticlesDoc.web_url)
})

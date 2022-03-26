import { render } from '@testing-library/react'
import ArticleCard from './ArticleCard'
import { mockArticle } from '../mocks'

const baseProps: React.ComponentProps<typeof ArticleCard> = {
  article: mockArticle,
}

it("renders valid article card's information", () => {
  const { baseElement } = render(<ArticleCard {...baseProps} />)

  const publishedDate = baseElement.querySelector(
    '.ax-article-card__published_date'
  ) as HTMLTimeElement

  expect(publishedDate).toHaveTextContent(
    new Date(mockArticle.published_date).toDateString()
  )
  expect(publishedDate.getAttribute('dateTime')).toBe('2022-03-22')
  expect(
    baseElement.querySelector('.ax-article-card__section')
  ).toHaveTextContent(mockArticle.section)
  expect(
    baseElement.querySelector('.ax-article-card__header')
  ).toHaveTextContent(mockArticle.title)
  expect(
    baseElement.querySelector('.article_card__abstract')
  ).toHaveTextContent(mockArticle.abstract)
  expect(
    baseElement.querySelector('.ax-article-card__figure')
  ).toBeInTheDocument()
})

it('not renders article image caption', () => {
  const { baseElement } = render(
    <ArticleCard
      article={{
        ...baseProps.article,
        media: [],
      }}
    />
  )

  expect(
    baseElement.querySelector('.ax-article-card__figure')
  ).not.toBeInTheDocument()
})

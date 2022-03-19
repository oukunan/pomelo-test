import { render, screen } from '@testing-library/react'
import ArticleCard from './ArticleCard'

const baseProps: React.ComponentProps<typeof ArticleCard> = {
  article: {
    id: 1,
    title: 'article title',
    abstract: 'article abstract',
    media: [
      {
        approved_for_syndication: 1,
        caption: 'article caption',
        copyright: '',
        'media-metadata': [
          {
            format: '',
            height: 100,
            url: 'https://static01.nyt.com/images/2022/03/16/us/politics/16dc-wardead-1/16dc-wardead-1-mediumThreeByTwo440.jpg',
            width: 100,
          },
          {
            format: '',
            height: 250,
            url: 'https://static01.nyt.com/images/2022/03/16/us/politics/16dc-wardead-1/16dc-wardead-1-mediumThreeByTwo440.jpg',
            width: 250,
          },
          {
            format: '',
            height: 440,
            url: 'https://static01.nyt.com/images/2022/03/16/us/politics/16dc-wardead-1/16dc-wardead-1-mediumThreeByTwo440.jpg',
            width: 440,
          },
        ],
        subtype: '',
        type: '',
      },
    ],
  },
}

it('renders valid article information', () => {
  render(<ArticleCard {...baseProps} />)

  expect(screen.queryByRole('heading')?.textContent).toBe(
    baseProps.article.title
  )
  expect(screen.queryByText(baseProps.article.abstract)).toBeInTheDocument()
  expect(
    screen.queryByText(baseProps.article.media[0].caption)
  ).toBeInTheDocument()
})

it('not renders article image caption', () => {
  render(
    <ArticleCard
      article={{
        ...baseProps.article,
        media: [
          {
            ...baseProps.article.media[0],
            caption: '',
          },
        ],
      }}
    />
  )

  expect(screen.queryByRole('heading')?.textContent).toBe(
    baseProps.article.title
  )
  expect(screen.queryByText(baseProps.article.abstract)).toBeInTheDocument()
  expect(
    screen.queryByText(baseProps.article.media[0].caption)
  ).not.toBeInTheDocument()
})

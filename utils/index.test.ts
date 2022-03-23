import { filterArticlesTitleAndAbstract } from './'
import { mockArticle } from '../mocks'

const baseMock = [
  {
    ...mockArticle,
    id: 1,
    title: 'This is A',
    abstract: 'Hello everyone',
  },
  { ...mockArticle, id: 2, title: 'This is B', abstract: 'Andrew' },
  { ...mockArticle, id: 3, title: 'This is C', abstract: 'Hmmmmmm' },
]
it('returns an empty array when has no articles', () => {
  const result = filterArticlesTitleAndAbstract([], 'Some query')

  expect(result).toEqual([])
})

it('it returns the filtered articles when a query is provided', () => {
  const result = filterArticlesTitleAndAbstract(baseMock, 'A')

  expect(result.length).toBe(2)
  expect(result.map((i) => i.id)).toEqual([1, 2])
})

it('returns all of the articles when query is not provided', () => {
  const result = filterArticlesTitleAndAbstract(baseMock, '')

  expect(result.length).toBe(baseMock.length)
  expect(result.map((i) => i.id)).toEqual(baseMock.map((i) => i.id))
})

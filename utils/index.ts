import { Article } from '../types'

/**
 * Filtered array of articles via `title` and `abstract` (ignore case)
 */
export function filterArticlesTitleAndAbstract(
  articles: Article[],
  query: string
) {
  if (!query) {
    return articles
  }

  const queryLowerCase = query.toLowerCase()

  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(queryLowerCase) ||
      article.abstract.toLowerCase().includes(queryLowerCase)
  )
}

// NYT Article URI pattern: nyt://article/a14os-p1ka1ka1-1pd
export function extractUriId(articleUri: string) {
  const [, uriId] = articleUri.split('nyt://article/')

  return uriId
}

export function sleep(delayMilliseconds: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delayMilliseconds)
  })
}

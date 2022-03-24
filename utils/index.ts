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

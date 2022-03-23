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

  const regex = new RegExp(String.raw`${query}`, 'ig')

  return articles.filter((i) => regex.test(i.title) || regex.test(i.abstract))
}

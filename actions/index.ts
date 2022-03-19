import { Article, PopularArticleResponse } from '../types'
import { restClient } from '../rest-client'

export async function fetchPopularArticles(): Promise<Article[]> {
  const result = await restClient.get<void, PopularArticleResponse>(
    '/svc/mostpopular/v2/viewed/1.json?api-key=s1zBzx3XWnmaoWhobtcb7sHHvmaAq2Kd'
  )

  return result.results
}

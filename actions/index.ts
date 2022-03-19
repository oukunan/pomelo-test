import { Article, PopularArticleResponse, SingeArticleResponse } from '../types'
import { restClient } from '../rest-client'

export async function fetchPopularArticles(): Promise<Article[]> {
  const data = await restClient.get<void, PopularArticleResponse>(
    '/svc/mostpopular/v2/viewed/1.json?api-key=s1zBzx3XWnmaoWhobtcb7sHHvmaAq2Kd'
  )

  return data.results
}

export async function fetchSingleArticle(uri: string) {
  const data = await restClient.get<void, SingeArticleResponse>(
    `/svc/search/v2/articlesearch.json?fq=uri:"${uri}"&api-key=s1zBzx3XWnmaoWhobtcb7sHHvmaAq2Kd`
  )

  return data.response.docs
}

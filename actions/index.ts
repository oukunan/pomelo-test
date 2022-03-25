import { Article, PopularArticleResponse, SingeArticleResponse } from '../types'
import { restClient } from '../rest-client'
import { sleep } from '../utils'

export async function fetchPopularArticles(): Promise<Article[]> {
  const data = await restClient.get<void, PopularArticleResponse>(
    '/svc/mostpopular/v2/viewed/1.json'
  )

  return data.results
}

export async function fetchSingleArticle(uriId: string) {
  await sleep(55000)
  const data = await restClient.get<void, SingeArticleResponse>(
    `/svc/search/v2/articlesearch.json?fq=uri:"nyt://article/${uriId}"`
  )

  return data.response.docs
}

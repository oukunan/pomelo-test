import React from 'react'

import { Article } from '../types'
import { filterArticlesTitleAndAbstract } from '../utils'

export default function useSearchArticles(articles: Article[]) {
  const [query, setQuery] = React.useState('')

  const filteredArticles = React.useMemo(
    () => filterArticlesTitleAndAbstract(articles, query),
    [articles, query]
  )

  return React.useMemo(
    () => ({ articles: filteredArticles, query, setQuery }),
    [filteredArticles, query]
  )
}

import React from 'react'
import { Article } from '../types'

export default function useArticles(articles: Article[]) {
  const [state, setState] = React.useState<Article[]>(articles)
  const [query, setQuery] = React.useState('')

  React.useEffect(() => {
    const regex = new RegExp(String.raw`${query}`, 'g')

    const x = articles.filter(
      (i) => regex.test(i.title) || regex.test(i.abstract)
    )

    setState(x)
  }, [articles, query])

  return React.useMemo(() => ({ articles: state, setQuery }), [state])
}

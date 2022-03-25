import React from 'react'

import { fetchPopularArticles } from '../actions'
import ArticleList from '../components/ArticleList'
import Layout from '../components/Layout'
import SearchInput from '../components/SearchInput'
import { Article } from '../types'
import styles from '../styles/Home.module.css'
import { filterArticlesTitleAndAbstract } from '../utils'

export default function Home(props: {
  articles: Article[]
  isError?: boolean
}) {
  const [query, setQuery] = React.useState('')

  const filteredArticles = React.useMemo(
    () => filterArticlesTitleAndAbstract(props.articles, query),
    [props.articles, query]
  )

  const isShouldRenderNumberOfSearchResult =
    query && filteredArticles.length > 0

  if (props.isError) {
    return (
      <Layout title="New York Times News">
        <p>Something went wrong. Please try again.</p>
      </Layout>
    )
  }

  return (
    <Layout title="New York Times News">
      <div className={styles.article__search_results_container}>
        {isShouldRenderNumberOfSearchResult && (
          <p className={styles.article__search_results}>
            Showing {filteredArticles.length} results for
          </p>
        )}
      </div>
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />

      <ArticleList articles={filteredArticles} />
    </Layout>
  )
}

export async function getStaticProps() {
  try {
    const articles = await fetchPopularArticles()

    return { props: { articles } }
  } catch (error) {
    return { props: { articles: [], isError: true } }
  }
}

import React from 'react'

import { fetchPopularArticles } from '../actions'
import ArticleList from '../components/ArticleList'
import Layout from '../components/Layout'
import SearchInput from '../components/SearchInput'
import useSearchArticles from '../hooks/useSearchArticles'
import { Article } from '../types'
import styles from '../styles/Home.module.css'

export default function Home(props: {
  articles: Article[]
  isError?: boolean
}) {
  const { articles, query, setQuery } = useSearchArticles(props.articles)

  const isShouldRenderNumberOfSearchResult = query && articles.length > 0

  if (props.isError) {
    return (
      <Layout title="New York Times News">
        <p>
          Cannot get your articles. Please come back later or refresh the page.
        </p>
      </Layout>
    )
  }

  return (
    <Layout title="New York Times News">
      <div className={styles.article__search_results_container}>
        {isShouldRenderNumberOfSearchResult && (
          <p className={styles.article__search_results}>
            Showing {articles.length} results for
          </p>
        )}
      </div>
      <SearchInput value={query} onChange={(e) => setQuery(e.target.value)} />

      <ArticleList articles={articles} />
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

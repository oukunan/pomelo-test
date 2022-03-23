import React from 'react'

import { fetchPopularArticles } from '../actions'
import ArticleList from '../components/ArticleList'
import Layout from '../components/Layout'
import SearchInput from '../components/SearchInput'
import useFilteredArticles from '../hooks/useFilteredArticles'
import { Article } from '../types'

export default function Home(props: { articles: Article[]; isError: boolean }) {
  const { articles, query, setQuery } = useFilteredArticles(props.articles)

  return (
    <Layout title="New York Times News">
      {props.isError ? (
        <p>
          Cannot get your articles. Please come back later or refresh the page.
        </p>
      ) : (
        <>
          <SearchInput
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <ArticleList articles={articles} />
        </>
      )}
    </Layout>
  )
}

export async function getServerSideProps() {
  try {
    const articles = await fetchPopularArticles()

    return { props: { articles } }
  } catch (error) {
    return { props: { articles: [], isError: true } }
  }
}

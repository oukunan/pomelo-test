import styles from '../styles/Home.module.css'
import { fetchPopularArticles } from '../actions'
import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import SearchInput from '../components/SearchInput'
import useArticles from '../hooks/useArticles'
import { Article } from '../types'

export default function Home(props: { articles: Article[]; isError: boolean }) {
  const { articles, setQuery } = useArticles(props.articles)

  if (props.isError) {
    return 'Something went wrong. Please try again.'
  }

  return (
    <Layout>
      <div>
        <SearchInput onChange={(e) => setQuery(e.target.value)} />
        <ul className={styles.articles_wrapper}>
          {articles.map((article) => (
            <li key={article.id}>
              <ArticleCard article={article} />
            </li>
          ))}
        </ul>
      </div>
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

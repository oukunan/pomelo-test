import styles from '../styles/Home.module.css'
import { fetchPopularArticles } from '../actions'
import ArticleCard from '../components/ArticleCard'
import Layout from '../components/Layout'
import { Article } from '../types'

export default function Home(props: { articles: Article[]; isError: boolean }) {
  if (props.isError) {
    return 'Something went wrong. Please try again.'
  }

  return (
    <Layout>
      <div>
        <ul className={styles.articles_wrapper}>
          {props.articles.map((article) => (
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

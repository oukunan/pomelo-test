import { fetchPopularArticles } from '../actions'
import ArticleCard from '../components/ArticleCard'
import { Article } from '../types'

export default function Home(props: { articles: Article[] }) {
  if (props.articles.length === 0) {
    return <p>No articles</p>
  }

  return (
    <div>
      {props.articles.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const articles = await fetchPopularArticles()
  return { props: { articles } }
}

import { fetchPopularArticles } from '../actions'
import ArticleCard from '../components/ArticleCard'
import { Article } from '../types'

export default function Home(props: { articles: Article[]; isError: boolean }) {
  if (props.isError) {
    return 'Something went wrong. Please try again.'
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
  try {
    const articles = await fetchPopularArticles()

    return { props: { articles } }
  } catch (error) {
    return { props: { articles: [], isError: true } }
  }
}

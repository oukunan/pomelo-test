import Link from 'next/link'
import { Article } from '../types'
import { extractUriId } from '../utils'
import ArticleCard from './ArticleCard'
import styles from './ArticleList.module.css'

export default function ArticleList(props: { articles: Article[] }) {
  if (props.articles.length === 0) {
    return <p>No articles found</p>
  }

  return (
    <ul className="ax-article-list__container">
      {props.articles.map((article) => (
        <li key={article.id} className={styles.article_list__item}>
          <Link href={`/article/${extractUriId(article.uri)}`}>
            <a>
              <ArticleCard article={article} />
            </a>
          </Link>
        </li>
      ))}
    </ul>
  )
}

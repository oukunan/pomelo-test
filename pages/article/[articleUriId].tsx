import cx from 'classnames'

import { fetchPopularArticles, fetchSingleArticle } from '../../actions'
import Layout from '../../components/Layout'
import styles from '../../styles/Article.module.css'
import { extractUriId } from '../../utils'

export default function ArticleDetails(props: {
  article: Awaited<ReturnType<typeof fetchSingleArticle>>
}) {
  return (
    <Layout title={props.article.headline.main}>
      <div className={styles.article__container}>
        <div className={styles.article__top_content_container}>
          <p
            className={cx(
              styles.article__section_name,
              'ax-article__section_name'
            )}
          >
            {props.article.section_name}
          </p>
          <h1 className={cx(styles.article__header, 'ax-article__header')}>
            {props.article.headline.main}
          </h1>
          <h2 className={cx(styles.article__abstract, 'ax-article__abstract')}>
            {props.article.abstract}
          </h2>
        </div>

        <div className={cx(styles.article__original, 'ax-article__original')}>
          {props.article.byline.original}
        </div>
        <time
          className={cx(styles.article__pub_date, 'ax-article__pub_date')}
          dateTime={props.article.pub_date}
        >
          Published: {new Date(props.article.pub_date).toDateString()}
        </time>
        <p
          className={cx(
            styles.article__lead_paragraph,
            'ax-article__lead_paragraph'
          )}
        >
          {props.article.lead_paragraph}
        </p>

        <a
          className={cx(styles.article__web_url, 'ax_article__web_url')}
          href={props.article.web_url}
          target="_blank"
          rel="noreferrer"
        >
          Further reading
        </a>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  const articles = await fetchPopularArticles()

  const paths = articles.map((article) => {
    return {
      params: {
        articleUriId: extractUriId(article.uri),
      },
    }
  })

  return { paths, fallback: false }
}

export async function getStaticProps(data: {
  params: { articleUriId: string }
}) {
  const article = await fetchSingleArticle(data.params.articleUriId)

  return {
    props: { article },
    // Revalidate content every 1 hour.
    revalidate: 60 * 60,
  }
}

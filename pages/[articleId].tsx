import { fetchSingleArticle } from '../actions'
import Layout from '../components/Layout'
import styles from '../styles/Article.module.css'

export default function ArticleDetails(props: {
  docs: Awaited<ReturnType<typeof fetchSingleArticle>>
  isError: boolean
}) {
  if (props.isError) {
    return <div>Cannot retrieve your article. Please try again later.</div>
  }

  const {
    abstract,
    headline: { main },
    byline: { original },
    lead_paragraph,
    section_name,
    web_url,
    pub_date,
  } = props.docs[0]

  return (
    <Layout>
      <div className={styles.article__container}>
        <div className={styles.article__top_content_container}>
          <p className={styles.article__section_name}>{section_name}</p>
          <h1 className={styles.article__header}>{main}</h1>
          <h2 className={styles.article__abstract}>{abstract}</h2>
        </div>

        <div className={styles.article__original}>{original}</div>
        <time className={styles.article__pub_date} dateTime={pub_date}>
          Published: {new Date(pub_date).toDateString()}
        </time>
        <p className={styles.article__lead_paragraph}>{lead_paragraph}</p>

        <a
          className={styles.article__web_url}
          href={web_url}
          target="_blank"
          rel="noreferrer"
        >
          Further reading
        </a>
      </div>
    </Layout>
  )
}

export async function getServerSideProps(data: { query: { uri: string } }) {
  try {
    const docs = await fetchSingleArticle(data.query.uri)

    return { props: { docs } }
  } catch (error) {
    return { props: { docs: [], isError: error } }
  }
}

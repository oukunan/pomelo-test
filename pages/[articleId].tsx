import { fetchSingleArticle } from '../actions'

export default function ArticleDetails(props: {
  docs: Awaited<ReturnType<typeof fetchSingleArticle>>
}) {
  if (props.docs.length === 0) {
    return 'Cannot find your article'
  }
  return (
    <div>
      <h1>{props.docs[0].headline.main}</h1>
      <p>{props.docs[0].lead_paragraph}</p>
    </div>
  )
}

export async function getServerSideProps(data: { query: { uri: string } }) {
  const docs = await fetchSingleArticle(data.query.uri)

  return { props: { docs } }
}

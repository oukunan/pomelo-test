import { fetchSingleArticle } from '../actions'

export default function ArticleDetails(props: {
  docs: Awaited<ReturnType<typeof fetchSingleArticle>>
  isError: boolean
}) {
  if (props.isError) {
    return 'Cannot retrieve your article Please try again later.'
  }

  return (
    <div>
      <h1>{props.docs[0].headline.main}</h1>
      <p>{props.docs[0].lead_paragraph}</p>
    </div>
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

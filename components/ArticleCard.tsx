import Image from 'next/image'
import Link from 'next/link'
import styles from './ArticleCard.module.css'
import { Article } from '../types'

export default function ArticleCard(props: {
  article: Pick<
    Article,
    'id' | 'title' | 'abstract' | 'media' | 'uri' | 'published_date' | 'section'
  >
}) {
  const media = props.article.media[0]

  return (
    <Link
      href={{
        pathname: `/${props.article.id}`,
        query: {
          uri: props.article.uri,
        },
      }}
      passHref
    >
      <article className={styles.container}>
        <span className={styles.article_published_date}>
          {new Date(props.article.published_date).toDateString()}
        </span>
        <div className={styles.content_container}>
          <div className={styles.header_and_description_container}>
            <p className={styles.article_section}>{props.article.section}</p>
            <h2 className={styles.article_header}>{props.article.title}</h2>
            <p className={styles.article_abstract}>{props.article.abstract}</p>
          </div>
          {media && (
            <figure className={styles.article_figure}>
              <Image
                src={media['media-metadata'][2].url}
                width={media['media-metadata'][2].width}
                height={media['media-metadata'][2].height}
                alt="article_image"
                priority
              />
            </figure>
          )}
        </div>
      </article>
    </Link>
  )
}

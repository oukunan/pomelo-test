import Image from 'next/image'
import Link from 'next/link'
import styles from './ArticleCard.module.css'
import { Article } from '../types'

export default function ArticleCard(props: {
  article: Pick<Article, 'id' | 'title' | 'abstract' | 'media' | 'uri'>
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
        <div className={styles.title_and_description_container}>
          <h2>{props.article.title}</h2>
          <p>{props.article.abstract}</p>
        </div>
        {media && (
          <div className={styles.image_container}>
            <figure>
              <Image
                src={media['media-metadata'][2].url}
                width={media['media-metadata'][2].width}
                height={media['media-metadata'][2].height}
                alt="article_image"
                priority
              />
              {media.caption && <figcaption>{media.caption}</figcaption>}
            </figure>
          </div>
        )}
      </article>
    </Link>
  )
}

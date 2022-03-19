import Image from 'next/image'
import Link from 'next/link'
import styles from './ArticleCard.module.css'
import { Article } from '../types'

export default function ArticleCard(props: {
  article: Pick<Article, 'id' | 'title' | 'abstract' | 'media'>
}) {
  const media = props.article.media[0]

  return (
    <Link href={`/${props.article.id}`} passHref>
      <article className={styles.container}>
        <div className={styles.title_and_description_container}>
          <h2>{props.article.title}</h2>
          <p>{props.article.abstract}</p>
        </div>
        <div className={styles.image_container}>
          <figure>
            <Image
              src={media['media-metadata'][2].url}
              width={media['media-metadata'][2].width}
              height={media['media-metadata'][2].height}
              alt="article_image"
            />
            {media.caption && <figcaption>{media.caption}</figcaption>}
          </figure>
        </div>
      </article>
    </Link>
  )
}

import cx from 'classnames'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import styles from './ArticleCard.module.css'
import { Article } from '../types'

export default React.memo(function ArticleCard(props: {
  article: Pick<
    Article,
    'id' | 'title' | 'abstract' | 'media' | 'uri' | 'published_date' | 'section'
  >
}) {
  const media = props.article.media[0]

  return (
    <article className={styles.article_card__container}>
      <time
        className={cx(
          styles.article_card__published_date,
          'ax-article-card__published_date'
        )}
        dateTime={props.article.published_date}
      >
        {new Date(props.article.published_date).toDateString()}
      </time>
      <div className={styles.article_card__content_container}>
        <div className={styles.article_card__header_and_description_container}>
          <p
            className={cx(
              styles.article_card__section,
              'ax-article-card__section'
            )}
          >
            {props.article.section}
          </p>
          <h3
            className={cx(
              styles.article_card__header,
              'ax-article-card__header'
            )}
          >
            {props.article.title}
          </h3>
          <p className={cx(styles.article_abstract, 'ax-article__abstract')}>
            {props.article.abstract}
          </p>
        </div>
        {media && (
          <figure
            className={cx(
              styles.article_card__figure,
              'ax-article-card__figure'
            )}
          >
            <Image
              src={media['media-metadata'][2].url}
              width={media['media-metadata'][2].width}
              height={media['media-metadata'][2].height}
              alt="article_card__image"
              priority
            />
          </figure>
        )}
      </div>
    </article>
  )
})

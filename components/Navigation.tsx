import cx from 'classnames'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import styles from './Navigation.module.css'

export default React.memo(function Navigation() {
  const router = useRouter()

  const navigationOptions = [
    {
      path: '/',
      content: 'Home',
    },
    {
      path: '/about',
      content: 'About',
    },
  ]

  return (
    <header className={styles.navigation__header}>
      <ul className={styles.navigation__container}>
        {navigationOptions.map((option) => (
          <li
            key={option.path}
            className={cx(
              styles.navigation__item,
              router.pathname === option.path && styles.navigation__item_active
            )}
          >
            <Link href={option.path}>{option.content}</Link>
          </li>
        ))}
      </ul>
    </header>
  )
})

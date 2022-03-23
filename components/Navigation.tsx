import Link from 'next/link'
import React from 'react'

import styles from './Navigation.module.css'

export default React.memo(function Navigation() {
  return (
    <header className={styles.navigation_header}>
      <ul className={styles.navigation_container}>
        <li className={styles.navigation_item}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navigation_item}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  )
})

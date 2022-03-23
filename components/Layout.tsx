import Head from 'next/head'
import Navigation from './Navigation'
import styles from './Layout.module.css'

export default function Layout(props: {
  children: React.ReactNode
  title: string
}) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
      </Head>
      <Navigation />
      <main className={styles.site_content}>{props.children}</main>
    </div>
  )
}

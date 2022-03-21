import Navigation from './Navigation'
import styles from './Layout.module.css'

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Navigation />
      <main className={styles.site_content}>{props.children}</main>
    </div>
  )
}

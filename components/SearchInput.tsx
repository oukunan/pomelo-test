import cx from 'classnames'
import styles from './SearchInput.module.css'

export default function SearchInput(
  props: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'placeholder'
  >
) {
  return (
    <input
      className={cx(styles.search_input, 'ax-search_input')}
      type="search"
      placeholder="Search The New York Times"
      {...props}
    />
  )
}

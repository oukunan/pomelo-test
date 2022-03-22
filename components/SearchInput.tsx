import styles from './SearchInput.module.css'

export default function SearchInput(
  props: Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    'className' | 'type' | 'placeholder'
  >
) {
  return (
    <input
      className={styles.search_input__container}
      type="text"
      placeholder="Search The New York Times"
      {...props}
    />
  )
}

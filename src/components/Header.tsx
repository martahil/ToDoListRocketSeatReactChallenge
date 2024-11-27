import headerLogo from '../assets/header-logo.svg'

import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={headerLogo} alt='Header logo' />
    </header>
  )
}
import React from 'react'
import styles from './Header.module.css'
import Link from 'next/link'
const Header = () => {
  return (
    <header className={styles.header}>
        <div className={styles.headerLinks}>
            <Link href={"/"}>Home</Link>
            <Link href={"/work"}>Work</Link>
            <Link href={"/contact"}>Contact</Link>
        </div>
    </header>
  )
}

export default Header
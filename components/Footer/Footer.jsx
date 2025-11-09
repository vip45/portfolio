import React from 'react'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footerLinks}>
            <a target="_blank" href="https://www.instagram.com/vipin9_/"><img src="/images/insta.svg" alt="" /></a>
            <a target="_blank" href="https://x.com/68_vipin"><img src="/images/x.svg" alt="" /></a>
            <a target="_blank" href="https://www.linkedin.com/in/vipinvyadav/"><img src="/images/linkedin.svg" alt="" /></a>
        </div>
    </footer>
  )
}

export default Footer
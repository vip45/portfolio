import React from 'react'
import styles from './Banner.module.css'
const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerMain}>
        <div className={styles.bannerLeft}>
          <h1>
            Hi, I am Vipin, <br /> Frontend Developer
          </h1>
          <p>
            I build the web you love to use. Pixel perfection meets performance.
            Creating digital magic with code. Code. Create. Inspire.
          </p>
          <a href='/resources/VipinResume.pdf' target='_blank' className={styles.download + " shadow-lg"}>Download Resume</a>
        </div>
        <div className={styles.bannerRight}><img src="/images/animated.png" alt="Vipin" /></div>
      </div>
    </div>
  );
}

export default Banner
import React from 'react'
import styles from './Exp.module.css'
const Exp = () => {
  return (
    <div className={styles.exp}>
      <div className={styles.expMain}>
        <h6 className='mb-2 '>Experience</h6>
        <div className={styles.expCard}>
          <h3>Techved Consultancy</h3>
          <p>Frontend Developer</p>
          <div className={styles.btns}>
            <button>Oct-2024</button>
            <span>-</span>
            <button>Present</button>
          </div>
          <p className={styles.desc}>
            Developing modern, responsive web interfaces using React and Next.js
            with a focus on performance and accessibility. Implementing reusable
            components, managing state efficiently, and collaborating with
            designers and backend teams to deliver seamless user experiences
            across devices.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Exp
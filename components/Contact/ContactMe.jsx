import React from "react";
import styles from "./Contact.module.css";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const ContactMe = () => {
  return (
    <div className={styles.contact}>
      <div className={styles.contactMain}>
        <h2>Contact Me</h2>
        <p>
          I’m always open to new opportunities and collaborations. You can reach
          out to me through the platforms below.
        </p>

        <div className={styles.contactInfo}>
          <a
            href="mailto:vipinvyadav9@gmail.com"
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            <FaEnvelope className={styles.icon} /> Mail
          </a>

          <a
            href="https://www.linkedin.com/in/vipinvyadav"
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            <FaLinkedin className={styles.icon} /> LinkedIn
          </a>

          <a
            href="https://github.com/vip45"
            target="_blank"
            rel="noreferrer"
            className={styles.contactLink}
          >
            <FaGithub className={styles.icon} /> Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;

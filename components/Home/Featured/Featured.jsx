import React from 'react'
import styles from './Featured.module.css'

const Featured = () => {
  const featuredProjects = [
    {
      title: "Techved Website",
      time: "2024 - Present",
      link: "https://www.techved.com",
      description:
        "“I handled the entire website development where I built multiple web pages such as the Home, Services, and About Us pages. I was responsible for implementing responsive layouts, managing regular UI updates, and ensuring a seamless user experience using HTML, CSS, JavaScript, and Next.js.”",
    },
    {
      title: "Techved Hawkeye  ",
      time: "2024",
      link: "https://www.techvedanalytics.com/hawkeye/",
      description:
        "“This landing page was developed using HTML, CSS, and JavaScript. I created the entire page from scratch and implemented multiple UI enhancements, animations, and interactive sliders to improve the overall user experience.”",
    },
    {
  title: "Hunar Employee Skill Matrix",
  time: "2024",
  link: "",
  description:
    "This project was developed using HTML, CSS, Bootstrap, and JavaScript. I implemented complex UI components and integrated interactive data visualizations using Chart.js, ensuring a responsive and seamless user experience across all devices.",
}
,
    {
      title: "Techved Hola AI   ",
      time: "2025",
      link: "https://www.thehola.ai/",
      description:
        "“This landing page was developed using HTML, CSS, and JavaScript. I created the entire page from scratch and implemented multiple UI enhancements, animations, and interactive sliders to improve the overall user experience.”",
    },
    {
      title: "Techved DECODE   ",
      time: "2025",
      link: "https://www.techveddecode.design/",
      description:
        "“This landing page was developed using HTML, CSS, and JavaScript. I created the entire page from scratch and implemented multiple UI enhancements, animations, and interactive sliders to improve the overall user experience.”",
    },
  ];

  return (
    <div className={styles.featured}>
      <div className={styles.featuredMain}>
        <h6>Featured Work</h6>
        <div className={styles.featuredWork}>
          {featuredProjects.map((project, index) => (
            <div key={index} className={styles.featuredCard}>
              <p className={styles.project}>{project.title}</p>
              <p className={styles.time}>
                {project.time}
                <span>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    Link
                  </a>
                </span>
              </p>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured

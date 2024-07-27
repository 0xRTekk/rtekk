import styles from './style.module.css';

export default function Index() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <div className={styles.navigation}>
            <h3>Navigation</h3>
            <a href="#home">Home</a>
            <a href="#about">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">About</a>
          </div>
          <div className={styles.socials}>
            <h3>Socials</h3>
            <a href="https://www.linkedin.com/in/remi-sulpice/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/0xRTekk" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <h2 className={styles.footerTitle}>2024 &copy;<br />Rémi Sulpice</h2>
      </div>
    </div>
  )
}

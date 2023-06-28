import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          Zac Hamann
        </h1>

        <p className={styles.description}>
          Software Developer
        </p>

        <div className={styles.grid}>
          <a href="https://github.com/ZacHamann/personal-portfolio" className={styles.card}>
            <h3>Portfolio &rarr;</h3>
            <p>View the repository for this website!</p>
          </a>

          <a href="https://github.com/ZacHamann/flask-dash-boilerplate" className={styles.card}>
            <h3>Dash within Flask &rarr;</h3>
            <p>A Flask application that initializes Dash applications as routes!</p>
          </a>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/ZacHamann"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FontAwesomeIcon icon={faGithub} size='2xl' />
        </a>
        <a
          href="https://www.linkedin.com/in/zhamann/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.icon}
        >
          <FontAwesomeIcon icon={faLinkedin} size='2xl' />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: end;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}

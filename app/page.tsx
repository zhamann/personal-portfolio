import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Card from '../components/card';
import data from '../data.json';

const projects = data.projects

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="p-2 flex flex-col justify-center items-center mb-12">
          <h1 className="text-5xl text-center font-bold mt-12">
            Zac Hamann
          </h1>

          <p className="text-xl text-center mt-8">
            Aspiring full-stack developer specializing in Next.js and Python
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap justify-evenly max-w-3xl mt-4 ml-8 mr-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                link={project.link}
                image={project.image}
              />
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t-2 border-black/10 flex justify-end p-2 mt-auto sticky bottom-0 bg-white">
        <a
          href="https://github.com/zhamann"
          target="_blank"
          rel="noopener noreferrer"
          className="m-2"
        >
          <FontAwesomeIcon icon={faGithub} size="2xl" />
        </a>
        <a
          href="https://www.linkedin.com/in/zhamann/"
          target="_blank"
          rel="noopener noreferrer"
          className="m-2"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2xl" />
        </a>
      </footer>
    </div>
  );
}

import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const linkMap = {
  "Stanley Cup Checkout Agent": "https://github.com/hatchakala/StanleyCupCheckoutAgent",
  "Yap-Map": "https://dorahacks.io/buidl/22370",
  "Delay Detective": "https://devpost.com/software/delay-detective",
  "Portfolio Website": "https://athardhik.netlify.app/",
};

const Projects = () => {
  return (
    <div className="pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-16 flex flex-wrap lg:justify-center items-start gap-8">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4 flex justify-center"
            >
              {linkMap[project.title] ? (
                <a href={linkMap[project.title]} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="rounded shadow-md hover:scale-105 transition-transform duration-300 w-[220px] h-[150px] object-cover"
                  />
                </a>
              ) : (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded shadow-md w-[220px] h-[150px] object-cover"
                />
              )}
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-2xl lg:w-3/4"
            >
              <h6 className="mb-2 text-xl font-semibold">{project.title}</h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded bg-[#2965F1] px-2 py-1 text-sm font-medium text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

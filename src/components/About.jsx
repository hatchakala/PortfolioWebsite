import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiCss3, SiHtml5, SiDocker, SiKubernetes, SiMysql, SiMicrosoftazure, SiGooglecloud } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaPython, FaJava, FaGitAlt, FaAws } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const skillsData = [
  { icon: <RiReactjsLine className="text-7xl text-cyan-400" />, name: "React" },
  { icon: <TbBrandNextjs className="text-7xl" />, name: "Next.js" },
  { icon: <SiMongodb className="text-7xl text-green-500" />, name: "MongoDB" },
  { icon: <DiRedis className="text-7xl text-red-700" />, name: "Redis" },
  { icon: <FaNodeJs className="text-7xl text-green-500" />, name: "Node.js" },
  { icon: <BiLogoPostgresql className="text-7xl text-sky-700" />, name: "PostgreSQL" },
  { icon: <FaPython className="text-7xl text-yellow-400" />, name: "Python" },
  { icon: <FaJava className="text-7xl text-red-600" />, name: "Java" },
  { icon: <SiCss3 className="text-7xl text-blue-500" />, name: "CSS3" },
  { icon: <SiHtml5 className="text-7xl text-orange-500" />, name: "HTML5" },
  { icon: <SiDocker className="text-7xl text-blue-400" />, name: "Docker" },
  { icon: <SiKubernetes className="text-7xl text-blue-600" />, name: "Kubernetes" },
  { icon: <FaGitAlt className="text-7xl text-orange-600" />, name: "Git" },
  { icon: <SiMysql className="text-7xl text-blue-500" />, name: "MySQL" },
  { icon: <FaAws className="text-7xl text-orange-400" />, name: "AWS" },
  { icon: <SiMicrosoftazure className="text-7xl text-blue-500" />, name: "Azure" },
  { icon: <SiGooglecloud className="text-7xl text-red-500" />, name: "GCP" },
];

const About = () => {
  return (
    <div className="pb-4">
      <h2 className="my-10 text-center text-4xl font-bold" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>About Me</h2>
      <div className="flex justify-center">
        <motion.div
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-2/3 text-center"
        >
          <p className="my-2 py-4">{ABOUT_TEXT}</p>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
        className="my-16 text-center text-4xl font-bold"
        style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
      >
        Skills
      </motion.h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8 px-4 py-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: window.innerWidth < 768 ? 15 : 25,
            repeat: Infinity,
          }}
          style={{ whiteSpace: "nowrap" }}
        >
          {[...skillsData, ...skillsData].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border-4 border-[#2965F1] p-4 min-w-[120px] flex flex-col justify-center items-center gap-3"
            >
              {skill.icon}
              <span className="text-sm font-medium text-[#2965F1]" style={{ fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;


import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiCss3, SiHtml5 } from "react-icons/si";
import { DiRedis } from "react-icons/di";
import { FaNodeJs, FaPython, FaJava } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";

const skillsIcons = [
  <RiReactjsLine className="text-7xl text-cyan-400" />,
  <TbBrandNextjs className="text-7xl" />,
  <SiMongodb className="text-7xl text-green-500" />,
  <DiRedis className="text-7xl text-red-700" />,
  <FaNodeJs className="text-7xl text-green-500" />,
  <BiLogoPostgresql className="text-7xl text-sky-700" />,
  <FaPython className="text-7xl text-yellow-400" />,
  <FaJava className="text-7xl text-red-600" />,
  <SiCss3 className="text-7xl text-blue-500" />,
  <SiHtml5 className="text-7xl text-orange-500" />,
];

const About = () => {
  return (
    <div className="pb-16">
      <h2 className="my-10 text-center text-4xl">About Me</h2>
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
        className="my-10 text-center text-4xl"
      >
        Skills
      </motion.h2>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-8 px-4 py-6"
          animate={{ x: ["0%", "-100%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
          }}
          style={{ whiteSpace: "nowrap" }}
        >
          {[...skillsIcons, ...skillsIcons].map((icon, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="rounded-2xl border-4 border-[#2965F1] p-4 min-w-[120px] flex justify-center items-center"
            >
              {icon}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;


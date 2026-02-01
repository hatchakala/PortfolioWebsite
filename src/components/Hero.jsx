import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/HardhikMainWebsitePFP.jpg";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  const [isTyped, setIsTyped] = useState(false);

  useEffect(() => {
    if (isTyped) {
      const cursor = document.querySelector(".Typewriter__cursor");
      if (cursor) cursor.style.display = "none";
    }
  }, [isTyped]);

  return (
    <div className="pb-8 lg:mb-36 px-4 sm:px-8">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-4 text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-center lg:text-left"
              style={{ color: '#40E0D0', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              Hey! I'm
            </motion.div>

            <motion.div
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-center lg:text-left glow-text"
              style={{ color: '#40E0D0', fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif' }}
            >
              {!isTyped ? (
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: false,
                    delay: 75,
                    cursor: "|",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .pauseFor(1500)
                      .typeString("Hardhik Atchakala")
                      .callFunction(() => setIsTyped(true))
                      .start();
                  }}
                />
              ) : (
                <span>Hardhik Atchakala</span>
              )}
            </motion.div>

            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="animated-gradient text-2xl sm:text-3xl tracking-tight font-medium"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1.3)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-3 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={container(1.6)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4"
            >
              {/* Email */}
              <a
                href="mailto:athardhik06@gmail.com"
                className="flex items-center gap-2 border border-neutral-300 px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105 group"
              >
                <FaEnvelope className="text-2xl group-hover:text-red-500 transition-colors duration-200" />
                <span className="text-base group-hover:text-red-500 transition-colors duration-200">Email</span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/atchakalahardhik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-neutral-300 px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105 group"
              >
                <FaLinkedin className="text-2xl group-hover:text-blue-600 transition-colors duration-200" />
                <span className="text-base group-hover:text-blue-600 transition-colors duration-200">LinkedIn</span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hatchakala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-neutral-300 px-4 py-2 rounded-lg transition-transform duration-200 hover:scale-105 group"
              >
                <FaGithub className="text-2xl group-hover:text-purple-500 transition-colors duration-200" />
                <span className="text-base group-hover:text-purple-500 transition-colors duration-200">GitHub</span>
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8 -mt-12 lg:-mt-20">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Hardhik Atchakala"
              className="w-64 sm:w-80 lg:w-96 mt-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


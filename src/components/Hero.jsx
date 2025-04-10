// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/HardhikMainWebsitePFP.png";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";
// import { useEffect, useState } from "react";

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay },
//   },
// });

// const Hero = () => {
//   const [isTyped, setIsTyped] = useState(false);

//   // One-time effect to hide the cursor after typing
//   useEffect(() => {
//     if (isTyped) {
//       const cursor = document.querySelector(".Typewriter__cursor");
//       if (cursor) cursor.style.display = "none";
//     }
//   }, [isTyped]);

//   return (
//     <div className="border-b border-neutral-900 pb-8 lg:mb-36 px-4 sm:px-8">
//       <div className="flex flex-wrap justify-center items-center">
//         <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
//           <div className="flex flex-col items-center lg:items-start">
//             <motion.div
//               variants={container(0)}
//               initial="hidden"
//               animate="visible"
//               className="pb-8 text-5xl font-thin tracking-tight sm:text-6xl lg:text-7xl"
//             >
//               {!isTyped ? (
//                 <Typewriter
//                   options={{
//                     autoStart: true,
//                     loop: false,
//                     delay: 75,
//                     cursor: "|",
//                   }}
//                   onInit={(typewriter) => {
//                     typewriter
//                       .typeString("Hardhik Atchakala")
//                       .callFunction(() => setIsTyped(true))
//                       .start();
//                   }}
//                 />
//               ) : (
//                 <span>Hardhik Atchakala</span>
//               )}
//             </motion.div>

//             <motion.span
//               variants={container(0.5)}
//               initial="hidden"
//               animate="visible"
//               className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent"
//             >
//               Full Stack Developer
//             </motion.span>

//             <motion.p
//               variants={container(1)}
//               initial="hidden"
//               animate="visible"
//               className="my-4 max-w-xl py-3 font-light tracking-tighter text-center lg:text-left"
//             >
//               {HERO_CONTENT}
//             </motion.p>

//             <motion.a
//               href="https://drive.google.com/file/d/1BgGa8OFSlt3ORBMmUVNKnQZPlkoqt6k3/view"
//               target="_blank"
//               rel="noopener noreferrer"
//               variants={container(1.5)}
//               initial="hidden"
//               animate="visible"
//               className="mt-4 inline-block rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 px-6 py-3 text-white font-medium tracking-tight shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
//             >
//               View Resume
//             </motion.a>
//           </div>
//         </div>

//         <div className="w-full lg:w-1/2 lg:p-8">
//           <div className="flex justify-center">
//             <motion.img
//               initial={{ x: 100, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 1, delay: 1.2 }}
//               src={profilePic}
//               alt="Hardhik Atchakala"
//               className="w-64 sm:w-80 lg:w-96"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/HardhikProfilePicture.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

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
    <div className="border-b border-neutral-900 pb-8 lg:mb-36 px-4 sm:px-8">
      <div className="flex flex-wrap justify-center items-center">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-8 text-5xl font-thin tracking-tight sm:text-6xl lg:text-7xl text-center lg:text-left"
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
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl sm:text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-4 max-w-xl py-3 font-light tracking-tighter text-center lg:text-left"
            >
              {HERO_CONTENT}
            </motion.p>

            {/* Resume Button */}
            <motion.a
              href="https://drive.google.com/file/d/1BgGa8OFSlt3ORBMmUVNKnQZPlkoqt6k3/view"
              target="_blank"
              rel="noopener noreferrer"
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="mt-4 inline-block rounded-full bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 px-6 py-3 text-white font-medium tracking-tight shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-105"
            >
              View Resume
            </motion.a>

            {/* Social Buttons */}
            <motion.div
              variants={container(2)}
              initial="hidden"
              animate="visible"
              className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/atchakalahardhik"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-5 py-2 text-white font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <FaLinkedin />
                LinkedIn
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/hatchakala"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-gray-600 via-gray-700 to-gray-800 px-5 py-2 text-white font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <FaGithub />
                GitHub
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/hardhikatchakala/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 px-5 py-2 text-white font-medium shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
              >
                <FaInstagram />
                Instagram
              </a>
            </motion.div>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Hardhik Atchakala"
              className="w-64 sm:w-80 lg:w-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;






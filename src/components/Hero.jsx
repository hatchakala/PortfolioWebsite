// import { HERO_CONTENT } from "../constants";
// import profilePic from "../assets/HardhikMainWebsitePFP.png";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";

// const container = (delay) => ({
//   hidden: { x: -100, opacity: 0 },
//   visible: {
//     x: 0,
//     opacity: 1,
//     transition: { duration: 0.5, delay: delay },
//   },
// });

// const Hero = () => {
//   return (
//     <div className="border-b border-neutral-900 pb-4 lg:mb-36">
//       <div className="flex flex-wrap">
//         <div className="w-full lg:w-1/2">
//           <div className="flex flex-col items-center lg:items-start">
//             <motion.div
//               variants={container(0)}
//               initial="hidden"
//               animate="visible"
//               className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
//             >
//               <Typewriter
//                 options={{
//                   strings: ["Hardhik Atchakala"],
//                   autoStart: true,
//                   loop: false,
//                   cursor: "|",
//                   delay: 75,
//                 }}
//                 onInit={(typewriter) => {
//                   typewriter
//                     .typeString("Hardhik Atchakala")
//                     .callFunction(() => {
//                       // Hides the cursor by targeting it directly after typing finishes
//                       document.querySelector(".Typewriter__cursor").style.display = "none";
//                     })
//                     .start();
//                 }}
//               />
//             </motion.div>
//             <motion.span
//               variants={container(0.5)}
//               initial="hidden"
//               animate="visible"
//               className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
//             >
//               Full Stack Developer
//             </motion.span>
//             {/* Reduced spacing between Full Stack Developer and description */}
//             <motion.p
//               variants={container(1)}
//               initial="hidden"
//               animate="visible"
//               className="my-2 max-w-xl py-3 font-light tracking-tighter"
//             >
//               {HERO_CONTENT}
//             </motion.p>
//             {/* Added resume button */}
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
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;

import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/HardhikMainWebsitePFP.png";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-36">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.div
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl"
            >
              {/* Typewriter effect to print the name once without any wiping */}
              <Typewriter
                options={{
                  strings: ["Hardhik Atchakala"],
                  autoStart: true,
                  loop: false,
                  cursor: "|",
                  delay: 75,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Hardhik Atchakala")
                    .callFunction(() => {
                      // Hide the cursor after typing is complete
                      const cursor = document.querySelector(".Typewriter__cursor");
                      if (cursor) {
                        cursor.style.display = "none";
                      }
                    })
                    .start();
                }}
              />
            </motion.div>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Full Stack Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-3 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;




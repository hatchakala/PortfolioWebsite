// import About from "./components/About";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Footer from "./components/CopyRight";
// import { Element } from "react-scroll";

// const App = () => {
//   return (
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-[#2965F1] selection:text-white">
//       <div className="fixed top-0 -z-10 h-full w-full">
//         <div className="absolute top-0 z-[-2] h-screen w-screen bg-navy"></div>
//       </div>

//       <div className="container mx-auto px-8">
//         <Navbar />

//         {/* Hero section */}
//         <Element name="hero" className="border-b-2 border-[#2965F1] pb-2">
//           <Hero />
//         </Element>

//         {/* About section */}
//         <Element name="about" className="pt-24 pb-16">
//           <About />
//         </Element>

//         <div className="h-[2px] w-full bg-[#2965F1] mb-20"></div>

//         {/* Experience section */}
//         <Element name="experience" className="border-b-2 border-[#2965F1] pb-24">
//           <Experience />
//         </Element>

//         {/* Projects section */}
//         <Element name="projects" className="border-b-2 border-[#2965F1] pb-24">
//           <Projects />
//         </Element>

//         {/* Contact section */}
//         <Element name="contact" className="border-b-2 border-[#2965F1] pb-24">
//           <Contact />
//         </Element>

//         {/* Footer */}
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default App;

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Footer from "./components/CopyRight";
import { Element } from "react-scroll";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-[#2965F1] selection:text-white">
      {/* Background gradient */}
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-gradient-to-b from-[#0B1A2B] to-[#1E2A3A]"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />

        {/* Hero section */}
        <Element name="hero" className="border-b-2 border-[#2965F1] pb-2">
          <Hero />
          {/* Example button */}
          <a href="#projects" className="bg-[#2965F1] hover:bg-[#1F4FCC] text-white font-medium rounded px-4 py-2 inline-block mt-6 transition-colors duration-300">
            View Projects
          </a>
        </Element>

        {/* About section */}
        <Element name="about" className="pt-24 pb-16">
          <About />
          {/* Example button */}
          <a href="#contact" className="bg-[#2965F1] hover:bg-[#1F4FCC] text-white font-medium rounded px-4 py-2 inline-block mt-6 transition-colors duration-300">
            Contact Me
          </a>
        </Element>

        <div className="h-[2px] w-full bg-[#2965F1] mb-20"></div>

        {/* Experience section */}
        <Element name="experience" className="border-b-2 border-[#2965F1] pb-24">
          <Experience />
        </Element>

        {/* Projects section */}
        <Element name="projects" className="border-b-2 border-[#2965F1] pb-24">
          <Projects />
        </Element>

        {/* Contact section */}
        <Element name="contact" className="border-b-2 border-[#2965F1] pb-24">
          <Contact />
        </Element>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;


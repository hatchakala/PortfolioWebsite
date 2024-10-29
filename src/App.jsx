// import About from "./components/About";
// import Contact from "./components/Contact";
// import Experience from "./components/Experience";
// import Hero from "./components/Hero";
// import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
// import Technologies from "./components/Technologies";

// const App = () => {
//   return (
//     <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
//       <div className="fixed top-0 -z-10 h-full w-full">
//         <div className="absolute top-0 z-[-2] h-screen w-screen bg-navy"></div>
//       </div>

//       <div className="container mx-auto px-8">
//         <Navbar />
//         <Hero />
//         <About />
//         <Technologies />
//         <Experience />
//         <Projects />
//         <Contact />
//       </div>
//     </div>
//   );
// };

// export default App; // Ensure this line is here

import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-navy"></div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        
        {/* Hero section with border below */}
        <div className="border-b-4 border-[#2965F1] pb-24">
          <Hero />
        </div>

        {/* About section with border below */}
        <div className="border-b-4 border-[#2965F1] pb-24">
          <About />
        </div>

        {/* Technologies section without extra border below */}
        <Technologies />

        {/* Experience section with border below */}
        <div className="border-b-4 border-[#2965F1] pb-24">
          <Experience />
        </div>

        {/* Projects section with border below */}
        <div className="border-b-4 border-[#2965F1] pb-24">
          <Projects />
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default App;



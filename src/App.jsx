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
//         <div className="absolute top-0 z-[-2] h-screen w-screen bg-navy"></div> {/* or bg-[#001F3F] */}
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

// src/App.jsx
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
        <Hero />
        <About />
        <Technologies />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default App; // Ensure this line is here

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
        
        {/* Hero section with blue border below */}
        <div className="border-b-4 border-[#2965F1] pb-24">
          <Hero />
        </div>

        {/* Adjusted About section with blue border higher up */}
        <div className="border-b-4 border-[#2965F1] pb-16">
          <About />
        </div>

        {/* Technologies section without extra border */}
        <Technologies />

        {/* Experience section with blue border below */}
        <div className="border-b-4 border-[#2965F1] pb-24">
          <Experience />
        </div>

        {/* Projects section with blue border below */}
        <div className="border-b-4 border-[#2965F1] pb-24">
          <Projects />
        </div>

        <Contact />
      </div>
    </div>
  );
};

export default App;




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
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-navy"></div>
      </div>

      {/* Navbar outside container so it can be full-width fixed */}
      <Navbar />

      <div className="container mx-auto px-8">
        {/* Spacer for fixed navbar on desktop */}
        <div className="hidden md:block h-20"></div>

        {/* Hero section */}
        <Element name="hero" className="border-b-2 border-[#2965F1] pb-2">
          <Hero />
        </Element>

        {/* About section */}
        <Element name="about" className="pt-24 pb-16" id="about-section">
          <div className="md:-mt-20 md:pt-20">
            <About />
          </div>
        </Element>

        <div className="h-[2px] w-full bg-[#2965F1] mb-20"></div>

        {/* Experience section */}
        <Element name="experience" className="border-b-2 border-[#2965F1] pb-24">
          <div className="md:-mt-20 md:pt-20">
            <Experience />
          </div>
        </Element>

        {/* Projects section */}
        <Element name="projects" className="border-b-2 border-[#2965F1] pb-24">
          <div className="md:-mt-20 md:pt-20">
            <Projects />
          </div>
        </Element>

        {/* Contact section */}
        <Element name="contact" className="border-b-2 border-[#2965F1] pb-24">
          <div className="md:-mt-20 md:pt-20">
            <Contact />
          </div>
        </Element>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;

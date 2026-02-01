import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/HardhikNavBar.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const navLinkClass =
    "relative text-base text-white transition-all duration-200 cursor-pointer hover:text-[#2965F1] after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#2965F1] after:transition-all after:duration-200";

  return (
    <nav className={`md:fixed md:top-0 md:left-0 md:right-0 z-50 mb-20 md:mb-0 flex items-center justify-between py-4 px-8 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-white/10 shadow-lg' : 'bg-transparent'
    }`}>
      <div className="flex flex-shrink-0 items-center">
        {/* Logo - Refresh page when clicked */}
        <button
          onClick={() => window.location.reload()}
          className="mx-2 w-9 cursor-pointer transition-transform duration-300 hover:scale-110"
        >
          <img className="w-full" src={logo} alt="logo" />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link 
          to="hero" 
          smooth={true} 
          duration={500} 
          className={navLinkClass}
          onClick={(e) => {
            if (window.scrollY < 100) {
              e.preventDefault();
            }
          }}
        >
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} offset={-80} className={navLinkClass}>
          About Me
        </Link>
        <Link to="experience" smooth={true} duration={500} offset={-80} className={navLinkClass}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} offset={-80} className={navLinkClass}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-80} className={navLinkClass}>
          Contact
        </Link>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="absolute top-16 right-4 backdrop-blur-md bg-[#0a0a1f]/95 text-white w-48 px-6 py-6 space-y-4 shadow-2xl rounded-lg border border-[#2965F1]/30"
        >
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About Me" },
            { id: "experience", label: "Experience" },
            { id: "projects", label: "Projects" },
            { id: "contact", label: "Contact" }
          ].map((section) => (
            <Link
              key={section.id}
              to={section.id}
              smooth={true}
              duration={500}
              className="block text-base transition-all duration-200 hover:text-[#2965F1] p-2 rounded text-right cursor-pointer hover:bg-[#2965F1]/20"
              onClick={toggleMenu}
            >
              {section.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/HardhikNavBarPFP.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

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
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* Logo - Refresh page when clicked */}
        <button
          onClick={() => window.location.reload()}
          className="mx-2 w-10 cursor-pointer"
        >
          <img className="w-full" src={logo} alt="logo" />
        </button>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        <Link to="hero" smooth={true} duration={500} className={navLinkClass}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className={navLinkClass}>
          About Me
        </Link>
        <Link to="experience" smooth={true} duration={500} className={navLinkClass}>
          Experience
        </Link>
        <Link to="projects" smooth={true} duration={500} className={navLinkClass}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500} className={navLinkClass}>
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
          className="absolute top-16 right-4 bg-transparent text-white w-40 px-4 py-4 space-y-4 shadow-lg rounded-lg"
        >
          {["hero", "about", "experience", "projects", "contact"].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              className="block text-base transition-colors duration-200 hover:bg-[#2965F1] hover:text-white p-2 rounded text-right cursor-pointer"
              onClick={toggleMenu}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

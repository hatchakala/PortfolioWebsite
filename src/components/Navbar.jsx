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
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-base text-white transition-colors duration-200 hover:text-[#2965F1]"
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="text-base text-white transition-colors duration-200 hover:text-[#2965F1]"
        >
          About Me
        </Link>
        <Link
          to="experience"
          smooth={true}
          duration={500}
          className="text-base text-white transition-colors duration-200 hover:text-[#2965F1]"
        >
          Experience
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="text-base text-white transition-colors duration-200 hover:text-[#2965F1]"
        >
          Projects
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="text-base text-white transition-colors duration-200 hover:text-[#2965F1]"
        >
          Contact
        </Link>
      </div>

      {/* Mobile Menu */}
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
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="block text-base transition-colors duration-200 hover:bg-[#2965F1] hover:text-white p-2 rounded text-right"
            onClick={toggleMenu}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="block text-base transition-colors duration-200 hover:bg-[#2965F1] hover:text-white p-2 rounded text-right"
            onClick={toggleMenu}
          >
            About Me
          </Link>
          <Link
            to="experience"
            smooth={true}
            duration={500}
            className="block text-base transition-colors duration-200 hover:bg-[#2965F1] hover:text-white p-2 rounded text-right"
            onClick={toggleMenu}
          >
            Experience
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="block text-base transition-colors duration-200 hover:bg-[#2965F1] hover:text-white p-2 rounded text-right"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="block text-base transition-colors duration-200 hover:bg-[#2965F1] hover:text-white p-2 rounded text-right"
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

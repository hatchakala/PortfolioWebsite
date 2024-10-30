import logo from "../assets/HardhikNavBarPFP.png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <Link
          to="contact" // Change to lowercase to match the id in Contact section
          smooth={true}
          duration={500}
        >
          <img className="mx-2 w-10 cursor-pointer" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/atchakalahardhik"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        
        {/* Github */}
        <a
          href="https://github.com/hatchakala"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-500"
        >
          <FaGithub />
        </a>

        {/* Instagram */}
        <a
          href="https://www.instagram.com/hardhikk.06/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-600"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
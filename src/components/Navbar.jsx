import { useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    //border-b border-[#ffb545]
    <>
      <div className="fixed z-20 flex h-[80px] w-full items-center justify-between bg-[#f39404] px-4">
        <img className="h-[50px]" src={Logo} alt="Logo" />
        <ul className="hidden text-xl text-white md:flex lg:text-3xl">
          <li>
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500}>
              Work
            </Link>
          </li>
        </ul>
        <Link to="contact" smooth={true} duration={500}>
          <button className="hidden bg-white px-3 py-2 text-2xl font-semibold text-stone-900 drop-shadow-3xl hover:bg-stone-900 hover:text-white hover:drop-shadow-2xl md:block 2xl:font-bold">
            Contact
          </button>
        </Link>

        <div onClick={handleClick} className="hover:drop-shadow-3xl md:hidden">
          {!isNavOpen ? (
            <FaBars size={30} color={"white"} />
          ) : (
            <FaTimes size={30} color={"white"} />
          )}
        </div>
      </div>
      {isNavOpen && (
        <ul className="fixed left-0 top-0 z-10 flex h-screen w-full flex-col items-start justify-center space-y-7 bg-[#f39404] text-4xl text-white md:hidden">
          <li>
            <Link to="home" onClick={handleClick} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" onClick={handleClick} smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              onClick={handleClick}
              smooth={true}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              onClick={handleClick}
              smooth={true}
              duration={500}
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={handleClick}
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      )}
    </>
  );
}

export default Navbar;

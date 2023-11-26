import { useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import Button from "./Button";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const [color, setColor] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const changeColor = () => {
    if (window.scrollY >= 80) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    //border-b border-[#ffb545]
    <>
      <div
        className={`w-full header-bg fixed flex justify-center z-20 ${
          color ? "bg-[#f39304f2]" : ""
        }`}
      >
        <div
          className={`flex h-[50px] sm:h-[80px] w-full items-center max-w-[1500px] justify-between px-4`}
        >
          <img className="h-[30px] sm:h-[50px] sm:ml-4" src={Logo} alt="Logo" />
          <ul className="hidden text-xl text-white md:flex items-center">
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
            <li>
              <Link to="contact" smooth={true} duration={500}>
                <Button type="primary">Contact</Button>
              </Link>
            </li>
          </ul>

          <div onClick={handleClick} className="md:hidden z-20">
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
              <Link
                to="home"
                onClick={handleClick}
                smooth={true}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                onClick={handleClick}
                smooth={true}
                duration={500}
              >
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
      </div>
    </>
  );
}

export default Navbar;

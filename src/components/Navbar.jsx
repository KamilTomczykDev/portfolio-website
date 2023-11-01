import { useState } from "react";
import Logo from "../assets/logo1.png";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    //border-b border-[#ffb545]
    <>
      <div className="fixed z-10 flex h-[80px] w-full items-center justify-between px-4">
        <img className="h-[50px]" src={Logo} alt="Logo" />
        <ul className="hidden text-xl text-white md:flex lg:text-3xl">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li className="font-semibold text-black hover:drop-shadow-[4px_4px_0_white] 2xl:font-bold">
            Contact
          </li>
        </ul>
        <div
          onClick={handleClick}
          className="hover:drop-shadow-[4px_4px_0_black] md:hidden"
        >
          {!isNavOpen ? (
            <FaBars size={30} color={"white"} />
          ) : (
            <FaTimes size={30} color={"white"} />
          )}
        </div>
      </div>
      {isNavOpen && (
        <ul className="absolute left-0 top-0 flex h-screen w-full flex-col items-start justify-center space-y-7 bg-[#f39404] text-4xl text-white md:hidden">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      )}
    </>
  );
}

export default Navbar;

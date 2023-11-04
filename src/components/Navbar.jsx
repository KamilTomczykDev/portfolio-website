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
      <div className="fixed z-20 flex h-[80px] w-full items-center justify-between bg-[#f39404] px-4">
        <img className="h-[50px]" src={Logo} alt="Logo" />
        <ul className="hidden text-xl text-white md:flex lg:text-3xl">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
        </ul>
        <button className="drop-shadow-3xl hidden bg-white px-3 py-2 text-2xl font-semibold text-black hover:bg-black hover:text-white hover:drop-shadow-2xl md:block 2xl:font-bold">
          Contact
        </button>
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

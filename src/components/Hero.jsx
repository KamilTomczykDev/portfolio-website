import { Link } from "react-scroll";
import HeaderImg from "../assets/header-image.png";

function Hero() {
  return (
    <div name="home">
      <div className="flex h-screen flex-col bg-[#f39404] md:flex-row md:items-center md:justify-between">
        <div className="w-max[1000px] mt-[80px] flex h-full flex-col  justify-center px-5 md:ml-[35px] md:justify-center xl:ml-[100px]">
          <p className="text-sm text-white md:text-2xl">Hi, my name is</p>
          <h1 className="text-4xl font-bold text-stone-900 sm:text-5xl lg:text-6xl 2xl:text-7xl ">
            Kamil Tomczyk
          </h1>
          <h2 className="mt-1 text-4xl font-bold text-stone-900 underline decoration-white decoration-solid sm:text-5xl lg:text-6xl 2xl:text-7xl">
            I'm Front-End Developer
          </h2>
          <p className="text-md mt-3 max-w-[550px] text-white xl:text-2xl">
            I'm specializing in building (and occasionally designing) responsive
            front-end web applications. My main goal is to create apps easy to
            use and easy to look at.
          </p>
          <div>
            <Link to="projects" smooth={true} duration={500}>
              <button className="text-md static mx-2 my-5 max-w-[160px] bg-white px-3 py-2 font-bold text-stone-900 drop-shadow-3xl hover:bg-stone-900 hover:text-white hover:drop-shadow-2xl md:px-4 md:py-3  md:text-xl">
                View work
              </button>
            </Link>
          </div>
        </div>
        <img
          className="hidden w-[40%] max-w-[600px] px-5 md:block 2xl:mr-[100px]"
          src={HeaderImg}
          alt="Header illustration"
        />
      </div>
    </div>
  );
}

export default Hero;

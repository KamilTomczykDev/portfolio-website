import { Link } from "react-scroll";
import HeaderImg from "../assets/header-image.png";
import { useInView } from "react-intersection-observer";
import Button from "./Button";

function Hero() {
  const { ref, inView } = useInView();
  return (
    <div name="home" className="flex justify-center bg-[#f39404]">
      <div className="flex h-screen max-w-[1500px] md:flex-row md:items-center md:justify-between">
        <div className="w-max[1000px] flex h-full flex-col gap-4  justify-center px-5 md:ml-[35px] md:justify-center xl:ml-0">
          <p
            ref={ref}
            className={`text-md text-white xl:text-xl transition duration-500 delay-250 ${
              inView ? "" : "translate-y-6 opacity-0"
            }`}
          >
            Hi, my name is
          </p>
          <div>
            <h1
              className={`text-4xl font-bold text-white sm:text-5xl lg:text-6xl 2xl:text-7xl transition duration-500 delay-[250ms] ${
                inView ? "" : "translate-y-6 opacity-0"
              }`}
            >
              Kamil Tomczyk
            </h1>
            <h2
              className={`mt-1 text-4xl font-bold text-stone-900 sm:text-5xl lg:text-6xl 2xl:text-7xl transition duration-500 delay-500 ${
                inView ? "" : "translate-y-6 opacity-0"
              }`}
            >
              I'm Front-End Developer
            </h2>
          </div>

          {/* <p
            className={`text-md mt-3 max-w-[550px] text-stone-900 xl:text-xl xl:leading-7 transition duration-1000 delay-[1.5s] ${
              inView ? "" : "translate-y-6 opacity-0"
            }`}
          >
            I'm specializing in building (and occasionally designing) responsive
            front-end web applications. My main goal is to create apps easy to
            use and easy to look at.
          </p> */}
          <div
            ref={ref}
            className={`flex gap-2 transition duration-500 delay-[750ms] ${
              inView ? "" : "translate-y-6 opacity-0"
            }`}
          >
            <Link to="contact" smooth={true} duration={1000}>
              <Button>Contact</Button>
            </Link>
            <Link className="" to="projects" smooth={true} duration={500}>
              <button className=" px-4 py-2 text-lg rounded-lg font-semibold hover:bg-stone-800 transition duration-300 hover:text-stone-200  text-stone-800 border-[3px] border-stone-800">
                View work
              </button>
            </Link>
          </div>
        </div>
        <img
          className={`hidden w-[40%] max-w-[450px] px-5 md:block transition duration-500 ${
            inView ? "" : `translate-x-[50px] opacity-0`
          }`}
          src={HeaderImg}
          alt="Header illustration"
        />
      </div>
    </div>
  );
}

export default Hero;

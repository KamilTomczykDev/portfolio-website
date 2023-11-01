import HeaderImg from "../assets/header-image.png";

function Hero() {
  return (
    <div>
      <div className="h-screen bg-[#f39404] flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col mt-[80px] justify-center md:justify-center  md:ml-[35px] xl:ml-[100px] h-full w-max[1000px] px-5">
          <p className="text-sm md:text-2xl text-white">Hi, my name is</p>
          <h1 className="text-4xl font-bold sm:text-5xl lg:text-7xl ">
            Kamil Tomczyk
          </h1>
          <h2 className="text-4xl font-bold sm:text-5xl mt-1 lg:text-7xl underline decoration-solid decoration-white">
            I'm <span className="">Front-End Developer</span>
          </h2>
          <p className="max-w-[500px] text-sm md:text-md lg:text-lg mt-3 text-white">
            I'm specializing in building (and occasionally designing) responsive
            front-end web applications. My main goal is to create apps easy to
            use and easy to look at.
          </p>
          <button className="bg-white border-4 drop-shadow-[4px_4px_0_black] hover:drop-shadow-[4px_4px_0_white] hover:border-white hover:bg-black hover:text-white max-w-[160px] mx-2 my-5 px-3 py-2 md:px-4 md:py-3 text-md md:text-xl font-bold z-1  border-black">
            View work
          </button>
        </div>
        <img
          className="hidden md:block w-[40%] 2xl:mr-[100px] max-w-[600px] px-5"
          src={HeaderImg}
          alt="Header illustration"
        />
      </div>
    </div>
  );
}

export default Hero;

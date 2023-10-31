import { HiArrowNarrowRight } from "react-icons/hi";

function Home() {
  return (
    <div name="home" className="w-full bg-stone-900 h-screen">
      {/* container */}
      <div className="w-max-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-stone-50">
          Kamil Tomczyk
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-stone-400">
          I'm a full-stack developer.
        </h2>
        <p className="text-stone-400 py-4 max-w-[550px]">
          I'm a front-end developer specializing in building (and occasionally
          designing) responsive front-end web applications.
        </p>
        <div>
          <button className="border-2 text-white px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
            View Work
            <span className="hover:rotate=90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;

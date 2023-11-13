import { useInView } from "react-intersection-observer";

function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <div name="about" className=" w-full text-black">
      <div
        className={`flex min-h-[100vh] w-full flex-col items-center py-[100px] justify-center transition duration-1000 ${
          inView ? "" : "translate-y-6 opacity-0"
        }`}
      >
        <div
          ref={ref}
          className="grid w-full max-w-[1000px] grid-cols-2 gap-8 px-4"
        >
          <div className="pb-8 sm:pl-4 sm:text-right">
            <p className="inline border-b-4 border-[#f39404] text-4xl font-bold text-stone-900 ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="grid w-full max-w-[1000px] gap-8 px-4 sm:grid-cols-2">
          <div className="text-4xl font-bold text-stone-900 sm:text-right">
            <p>Hi, I'm Kamil, nice to meet you. Please take a look around.</p>
          </div>
          <div
            ref={ref}
            className={`text-[18px] text-stone-900 transition duration-1000 delay-500 ${
              inView ? "" : "translate-y-6 opacity-0"
            }`}
          >
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients raging from individuals and small-businesses all the
              way to large enterprise corporations. What would you do if you had
              a software expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

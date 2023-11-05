import HeaderImg from "../assets/header-image.png";

export default function PageNotFound() {
  return (
    <div className=" flex  h-screen w-full flex-col justify-center  bg-[#f39404] p-4 md:items-center">
      <div className="mb-10 flex items-center justify-center ">
        <img
          className="w-[40%] max-w-[600px]"
          src={HeaderImg}
          alt="Header illustration"
        />
      </div>
      <h1 className="text-5xl font-bold text-stone-900">I'm sorry,</h1>
      <h2 className="text-4xl font-semibold text-stone-900 md:text-5xl">
        Page was not found
      </h2>

      <button className="mt-10 bg-white px-4 py-3 text-2xl font-semibold text-stone-900 drop-shadow-3xl hover:bg-stone-900 hover:text-white hover:drop-shadow-2xl">
        Go to Homepage
      </button>
    </div>
  );
}

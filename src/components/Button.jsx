function Button({ children, type }) {
  if (type === "primary")
    return (
      <button className="bg-white px-3 py-1 text-md md:px-4 md:py-2 md:text-lg rounded-lg font-semibold hover:bg-stone-300 md:border-[3px] border-[2px] border-white transition duration-300 hover:border-stone-300 text-stone-800">
        {children}
      </button>
    );

  if (type === "secondary")
    return (
      <button className=" transition duration-300  px-3 py-1 md:px-4 md:py-2 text-md md:text-lg rounded-lg font-semibold hover:bg-stone-800 border-[2px] hover:text-stone-200  text-stone-800 md:border-[3px] border-stone-800">
        {children}
      </button>
    );
}

export default Button;

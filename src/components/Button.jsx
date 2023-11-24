function Button({ children, type }) {
  return (
    <button className="bg-white px-4 py-2 text-lg rounded-lg font-semibold hover:bg-stone-200 border-[3px] border-white transition-all duration-300 hover:border-stone-200 text-stone-800">
      {children}
    </button>
  );
}

export default Button;

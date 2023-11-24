import { useInView } from "react-intersection-observer";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  return (
    <div
      name="contact"
      className="flex min-h-[100vh] w-full items-center justify-center bg-white px-4 py-[100px]"
    >
      <form
        ref={ref}
        action="https://getform.io/f/4fb75a18-8e7a-4f54-a498-2e21b58fc13c"
        method="POST"
        className={`flex w-full max-w-[600px] flex-col transition duration-1000 ${
          inView ? "" : "translate-y-6 opacity-0"
        }`}
      >
        <div className="pb-8">
          <p className="inline border-b-4 border-[#f39404] text-4xl font-bold text-stone-900">
            Contact
          </p>
          <p className="py-4 text-2xl text-stone-900">
            Submit the from below or shoot me an email -
            <span className="break-words font-semibold text-[#f39404]">
              kamiltomczyk.dev@gmail.com
            </span>
          </p>
        </div>
        <input
          type="text"
          className="bg-stone-900 p-2 rounded-lg text-white "
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 bg-stone-900 rounded-lg p-2 text-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          className="bg-stone-900 p-2 rounded-lg text-white"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="my-8 mx-auto px-4 py-2 text-lg rounded-lg font-semibold hover:bg-stone-800 hover:text-stone-200  text-stone-800 border-[3px] border-stone-800">
          Let's collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;

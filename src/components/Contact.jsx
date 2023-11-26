import { useInView } from "react-intersection-observer";
import Button from "./Button";

function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });
  return (
    <div
      name="contact"
      className="flex w-full items-center justify-center bg-white px-4 py-[80px] lg:py-[200px]"
    >
      <form
        ref={ref}
        action="https://getform.io/f/4fb75a18-8e7a-4f54-a498-2e21b58fc13c"
        method="POST"
        className={`flex w-full max-w-[600px] flex-col transition duration-500 ${
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
        <div className="flex flex-col gap-4">
          <input
            type="text"
            className="bg-stone-900 p-2 rounded-lg text-white "
            placeholder="Name"
            name="name"
          />
          <input
            className="bg-stone-900 rounded-lg p-2 text-white"
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
          <Button type="secondary">Let's collaborate</Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;

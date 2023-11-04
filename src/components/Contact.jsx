function Contact() {
  return (
    <div
      name="contact"
      className="flex h-screen w-full items-center justify-center bg-white p-4"
    >
      <form
        action="https://getform.io/f/4fb75a18-8e7a-4f54-a498-2e21b58fc13c"
        method="POST"
        className="flex w-full max-w-[600px] flex-col"
      >
        <div className="pb-8">
          <p className="inline border-b-4 border-[#f39404] text-4xl font-bold text-black">
            Contact
          </p>
          <p className="py-4 text-2xl text-black">
            Submit the from below or shoot me an email -
            <span className="text-wrap font-semibold text-[#f39404]">
              kamiltomczyk.dev@gmail.com
            </span>
          </p>
        </div>
        <input
          type="text"
          className="drop-shadow-5xl bg-black p-2 text-white"
          placeholder="Name"
          name="name"
        />
        <input
          className="drop-shadow-5xl my-4 bg-black p-2 text-white"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          name="message"
          className="drop-shadow-5xl bg-black p-2 text-white"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="drop-shadow-3xl mx-auto my-8 flex bg-[#f39404] px-4 py-3 font-semibold text-black">
          Let's collaborate
        </button>
      </form>
    </div>
  );
}

export default Contact;

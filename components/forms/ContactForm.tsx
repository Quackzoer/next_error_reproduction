function ContactForm() {
  return (
    <div className="flex flex-col max-w-screen-md min-h-full mx-10 text-lg">
      <h2 className="text-6xl font-customSerif text-amber-500">
        Lorem ipsum dolor sit amet.
      </h2>
      <p className="mt-5 text-lg text-white">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nemo quae qui at odit, ex aliquid mollitia exercitationem voluptates, tempore soluta impedit veritatis ea nesciunt eum consectetur asperiores obcaecati illo?
      </p>
      <form className="flex flex-col h-full">
        <div className="mt-10">
          <input
            type="email"
            className="block w-full p-4 mt-2 text-white bg-slate-800 focus:outline-0"
            placeholder="Lorem ipsum dolor sit amet."
          />
        </div>
        <div className="mt-5">
          <textarea
            className="w-full p-4 mt-2 mb-10 text-white resize-none h-60 bg-slate-800 focus:outline-0"
            placeholder="Lorem ipsum dolor sit amet."
          ></textarea>
        </div>
        <div className="flex mt-auto">
          <button className="p-4 ml-auto w-full font-semibold text-2xl bg-amber-500 text-slate-900">
            Lorem
          </button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;

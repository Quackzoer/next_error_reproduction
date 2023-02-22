interface Props {
  closeModal: () => void;
}

function FollowForm({ closeModal }: Props) {
  return (
    <div className="max-w-screen-sm p-10 text-white bg-slate-800 font-customSans">
      <h2 className="text-3xl font-customSerif text-amber-500">
        Lorem ipsum dolor sit amet.
      </h2>
      <p className="text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem possimus sapiente, iusto praesentium iure mollitia.
      </p>
      <form className="mt-5">
        <input
          id="email"
          name="email"
          className="w-full p-4 px-4 mt-5 text-white outline-none bg-slate-700"
          placeholder="email@example.com"
        />
        <div className="flex mt-10">
          <button
            type="button"
            className="p-4 border outline-none w-36 text-slate-400 border-slate-400"
            onClick={closeModal}
          >
            ZAMKNIJ
          </button>
          <button className="p-4 ml-auto font-semibold outline-none w-36 bg-amber-500 text-slate-900">
            WYŚLIJ
          </button>
        </div>
      </form>
    </div>
  );
}

export default FollowForm;

import ContentWrapper from "./ContentWrapper";

function Navbar() {
  return (
    <nav className="absolute top-0 z-10 flex justify-center w-full">
      <ContentWrapper>
        <div className="flex items-end justify-end w-full py-10">
          <a
            className="text-3xl cursor-pointer font-customSerif nav-btn"
            href="#contactSection"
          >
            Lorem
          </a>
        </div>
      </ContentWrapper>
    </nav>
  );
}

export default Navbar;

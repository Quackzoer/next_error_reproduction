import ContentWrapper from "../ContentWrapper";
import FormActionButtons from "../FormActionButtons";

function HeaderSection() {
  return (
    <div
      id="headerSection"
      className="flex flex-col items-center min-h-screen bg-slate-900/70 heroBackground"
    >
      <ContentWrapper>
        <div className="flex flex-col items-center justify-center min-h-screen py-32 ">
          <header className="flex items-center">
            <div className="lg:mr-20">
              <h1 className="relative text-6xl font-customSerif sm:text-9xl text-amber-500">
                <span className="absolute block w-40 h-40 bg-slate-500/50 -top-14 -left-14 z-[-1]"></span>
                Lorem
              </h1>
              <h2 className="text-2xl mt-10">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui dolor distinctio vitae obcaecati minima, voluptatem delectus quas expedita sint inventore modi, culpa ratione perspiciatis ipsa, dolores sit corrupti optio rerum. Suscipit vitae voluptates nemo, explicabo deleniti asperiores est non, quos corporis molestiae rem error dignissimos ex harum, necessitatibus accusantium?
              </h2>
              <FormActionButtons />
            </div>
            <div className="relative flex-shrink-0">
              <span className="absolute block w-80 h-80 bg-slate-500/50 -bottom-32 -left-32 z-[-1] rounded-full"></span>
              <img
                src="/pexels-pavel-danilyuk-7658304.jpg"
                alt=""
                className="w-[450px] clippedImage "
              />
            </div>
          </header>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeaderSection;

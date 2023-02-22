import ContentWrapper from "../ContentWrapper";
import FormActionButtons from "../FormActionButtons";

function RemindSection() {
  return (
    <section className="flex justify-center w-full py-32 bg-slate-800">
      <ContentWrapper>
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col items-start">
            <h2 className="mb-5 text-8xl font-customSerif text-amber-500">
              Lorem, ipsum dolor.
            </h2>
            <p className="mt-5 text-2xl ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit blanditiis dignissimos beatae veritatis a possimus eum amet culpa voluptas, fugiat ducimus iusto adipisci dolor non nobis sapiente, corrupti libero unde!
            </p>
            <FormActionButtons />
          </div>
          <img
            src="/pexels-fauxels-3184345.jpg"
            alt="people working together"
            className="w-[550px] object-fit ml-10 flex-shrink-0 clippedImage"
          />
        </div>
      </ContentWrapper>
    </section>
  );
}

export default RemindSection;

import { useState } from "react";
import DetailsModal from "./DetailsModal";
import DetailsForm from "./forms/DetailsForm";
import FollowModal from "./FollowModal";
import FollowForm from "./forms/FollowForm";

function FormActionButtons() {
  const [openDetails, setOpenDetails] = useState(false);
  const [openFollow, setOpenFollow] = useState(false);

  return (
    <div className="flex flex-col max-w-screen-sm mt-10">
      <button
        className="w-full p-4 mr-5 text-2xl font-semibold outline-none bg-amber-500 text-slate-900"
        onClick={() => {
          setOpenDetails(true);
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing.
      </button>
      <button
        className="w-full p-4 mt-5 text-2xl font-semibold border-2 outline-none border-amber-500 text-amber-500"
        onClick={() => {
          setOpenFollow(true);
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing.

      </button>
      <DetailsModal
        isOpen={openDetails}
        closeModal={() => {
          setOpenDetails(false);
        }}
      >
        <DetailsForm
          closeModal={() => {
            setOpenDetails(false);
          }}
        />
      </DetailsModal>
      <FollowModal
        isOpen={openFollow}
        closeModal={() => {
          setOpenFollow(false);
        }}
      >
        <FollowForm
          closeModal={() => {
            setOpenFollow(false);
          }}
        />
      </FollowModal>
    </div>
  );
}

export default FormActionButtons;

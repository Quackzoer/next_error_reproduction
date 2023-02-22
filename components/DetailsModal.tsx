import { MouseEventHandler, useRef } from "react";
import Modal, { Styles } from "react-modal";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

function DetailsModal({ isOpen, closeModal, children }: Props) {
  Modal.setAppElement("#__next");

  const overlayRef = useRef(null);
  function closeOnOverlay(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (e.target === overlayRef.current) {
      closeModal();
    }
  }

  const customStyles: Styles = {
    content: {
      top: "auto",
      left: "auto",
      right: "auto",
      bottom: "auto",
      width: "100%",
      height: "100%",
      overflow: "auto",
      borderRadius: "none",
      padding: "none",
      border: "none",
      backgroundColor: "#00000000",
    },
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      overflow: "auto",
      zIndex: 1000,
      backgroundColor: "#00000080",
    },
  };
  return (
    <Modal
      isOpen={isOpen}
      style={customStyles}
      onRequestClose={closeModal}
      bodyOpenClassName="overflow-hidden"
    >
      <div
        ref={overlayRef}
        className="flex justify-center w-full min-h-screen bg-slate-900"
        onMouseDown={closeOnOverlay}
      >
        {children}
      </div>
    </Modal>
  );
}

export default DetailsModal;

import Modal, { Styles } from "react-modal";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
}

function FollowModal({ isOpen, closeModal, children }: Props) {
  Modal.setAppElement("#__next");

  const customStyles: Styles = {
    content: {
      borderRadius: "none",
      padding: "none",
      border: "none",
      inset: 0,
      position: "relative",
    },
    overlay: {
      position: "fixed",
      height: "100vh",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000,
      backgroundColor: "#00000080",
    },
  };
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
      {children}
    </Modal>
  );
}

export default FollowModal;

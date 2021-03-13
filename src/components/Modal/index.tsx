import React from "react";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { StyledModal, StyledPaper } from "./styles";

interface ModalProps {
  open: boolean;
  onClose: Function;
  width?: number;
}

export const Modal: React.FC<ModalProps> = ({ open, onClose, children, width }) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <StyledModal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={open}>
        <StyledPaper width={width ? width : 400}>{children}</StyledPaper>
      </Fade>
    </StyledModal>
  );
};

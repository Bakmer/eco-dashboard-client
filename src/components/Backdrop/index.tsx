import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { StyledBackdrop } from "./styles";

interface BackdropProps {
  open: boolean;
  close?: Function;
}

export const Backdrop: React.FC<BackdropProps> = ({ open, close }) => {
  const handleClose = () => {
    if (close) {
      close();
    } else {
      return;
    }
  };

  return (
    <StyledBackdrop open={open} onClick={() => handleClose}>
      <CircularProgress color="inherit" />
    </StyledBackdrop>
  );
};

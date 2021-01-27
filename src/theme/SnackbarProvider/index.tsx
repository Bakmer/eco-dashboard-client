import React from "react";
import SnackbarProvider from "./styles";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

interface SnackbarProps {}

const Snackbar: React.FC<SnackbarProps> = ({ children }) => {
  const notistackRef: any = React.createRef();

  const onClickDismiss = (key: any) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      maxSnack={4}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      ref={notistackRef}
      action={(key) => <CloseRoundedIcon onClick={onClickDismiss(key)} />}
    >
      {children}
    </SnackbarProvider>
  );
};

export default Snackbar;

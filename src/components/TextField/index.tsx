import React from "react";
import { StyledMuiTextField } from "./styles";
import { StandardTextFieldProps } from "@material-ui/core/TextField";

interface TextFieldProps extends StandardTextFieldProps {}

export const TextField: React.FC<TextFieldProps> = React.forwardRef(
  (props, ref) => {
    return <StyledMuiTextField {...props} inputRef={ref} variant="outlined" />;
  }
);

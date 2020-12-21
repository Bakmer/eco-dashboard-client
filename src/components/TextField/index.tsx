import React from "react";
import { StyledMuiTextField } from "./styles";
import { BaseTextFieldProps } from "@material-ui/core/TextField";

interface TextFieldProps extends BaseTextFieldProps {}

export const TextField: React.FC<TextFieldProps> = (props) => {
  return <StyledMuiTextField {...props} variant="outlined" />;
};

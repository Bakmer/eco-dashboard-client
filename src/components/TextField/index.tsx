import React from "react";
import { StyledMuiTextField } from "./styles";
import { StandardTextFieldProps } from "@material-ui/core/TextField";

interface TextFieldProps extends StandardTextFieldProps {}

export const TextField: React.FC<TextFieldProps> = React.forwardRef((props, ref) => {
  const { size, ...rest } = props;
  return <StyledMuiTextField {...rest} inputRef={ref} variant="outlined" size={size ? size : "small"} />;
});

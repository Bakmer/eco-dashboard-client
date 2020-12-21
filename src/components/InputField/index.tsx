import React from "react";
import { StyledOutlinedInput } from "./styles";
import { OutlinedInputProps } from "@material-ui/core/OutlinedInput";

interface InputFieldProps extends OutlinedInputProps {}

export const InputField: React.FC<InputFieldProps> = () => {
  return <StyledOutlinedInput />;
};

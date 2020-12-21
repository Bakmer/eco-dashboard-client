import React from "react";
import { StyledButton } from "./styles";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

interface ButtonProps extends MuiButtonProps {}

export const Button: React.FC<ButtonProps> = (props) => {
  const { color, variant } = props;

  return (
    <StyledButton
      {...props}
      color={color ? color : "primary"}
      variant={variant ? variant : "contained"}
    >
      {props.children}
    </StyledButton>
  );
};

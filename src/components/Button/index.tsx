import React from "react";
import { StyledButton, ButtonWrapper, StyledProgress } from "./styles";
import { ButtonProps as MuiButtonProps } from "@material-ui/core/Button";

interface ButtonProps extends MuiButtonProps {
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { children, color, variant, loading, disabled, ...rest } = props;

  return (
    <ButtonWrapper>
      <StyledButton
        {...rest}
        color={color ? color : "primary"}
        variant={variant ? variant : "contained"}
        disabled={disabled ? disabled : loading}
      >
        {children}
      </StyledButton>
      {loading && <StyledProgress size={25} />}
    </ButtonWrapper>
  );
};

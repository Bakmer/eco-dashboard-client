import styled from "styled-components";
import MuiTextField from "@material-ui/core/TextField";

interface StyledMuiTextFieldProps {}

export const StyledMuiSelect = styled(MuiTextField)<StyledMuiTextFieldProps>`
  .MuiFormHelperText-root {
    position: absolute;
    bottom: -18px;
    right: 0px;
  }
`;

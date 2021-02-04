import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import { TextField } from "../TextField";

export const StyledPaper = styled(Paper)({
  display: "flex",
  alignItems: "center",
  width: 400,
  boxShadow: "none",
});

export const StyledTextField = styled(TextField)`
  label {
    top: 1px;
    &.Mui-focused {
      top: 0;
    }
  }
`;

export const StyledIconButton = styled(IconButton)({
  padding: 10,
});

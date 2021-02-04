import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: "2px 4px",
  display: "flex",
  alignItems: "center",
  width: 400,
  border: `1px solid ${theme.borderSecondary}`,
  boxShadow: "none",
}));

export const StyledInput = styled(InputBase)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  flex: 1,
}));

export const StyledIconButton = styled(IconButton)({
  padding: 10,
});

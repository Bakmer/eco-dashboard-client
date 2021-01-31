import styled from "styled-components";
import MuiButton from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

interface StyledButtonProps {}

export const StyledButton = styled(MuiButton)<StyledButtonProps>`
  font-weight: 600;
`;

export const ButtonWrapper = styled.div(({ theme }) => ({
  margin: theme.spacing(1),
  position: "relative",
}));

export const StyledProgress = styled(CircularProgress)`
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -12px;
  margin-left: -12px;
`;

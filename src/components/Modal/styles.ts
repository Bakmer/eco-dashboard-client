import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaper = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 2,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4, 4),
  outline: 0,
  width: 400,
}));

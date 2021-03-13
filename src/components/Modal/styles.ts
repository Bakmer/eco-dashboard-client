import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

interface StyledPaperProps {
  width: number;
}

export const StyledModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledPaper = styled.div<StyledPaperProps>(({ theme, width }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: 4,
  boxShadow: theme.shadows[5],
  padding: theme.spacing(4, 4),
  outline: 0,
  width: "95%",
  [theme.breakpoints.up("sm")]: {
    width: width,
  },
}));

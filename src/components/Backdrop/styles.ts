import styled from "styled-components";
import Backdrop from "@material-ui/core/Backdrop";

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  color: "#fff",
}));

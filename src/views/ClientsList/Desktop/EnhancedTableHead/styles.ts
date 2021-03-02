import styled from "styled-components";
import TableCell from "@material-ui/core/TableCell";

export const VisuallyHidden = styled.span({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  top: 20,
});

export const StyledTableCell = styled(TableCell)`
  .MuiSvgIcon-root {
    position: absolute;
    right: -26px;
  }
`;

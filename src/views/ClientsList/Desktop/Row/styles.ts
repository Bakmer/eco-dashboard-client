import styled from "styled-components";
import TableRow from "@material-ui/core/TableRow";

export const StyledTableRow = styled(TableRow)(() => ({
  "& > *": {
    borderBottom: "unset",
  },
}));

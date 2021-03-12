import React from "react";
import { StyledTableCell } from "./styles";
import { TableCellProps } from "@material-ui/core/TableCell";

export const TableCell: React.FC<TableCellProps> = (props) => {
  return <StyledTableCell {...props}>{props.children}</StyledTableCell>;
};

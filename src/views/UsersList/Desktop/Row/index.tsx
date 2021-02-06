import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { ListUsersQueryResult } from "../../../../generated/graphql";

interface RowProps {
  data: ListUsersQueryResult;
}

export const Row: React.FC<RowProps> = ({ data }) => {
  return (
    <TableRow key={data.name}>
      <TableCell component="th" scope="row">
        {data.name}
      </TableCell>
      <TableCell align="right">{data.calories}</TableCell>
      <TableCell align="right">{data.fat}</TableCell>
      <TableCell align="right">{data.carbs}</TableCell>
      <TableCell align="right">{data.protein}</TableCell>
    </TableRow>
  );
};

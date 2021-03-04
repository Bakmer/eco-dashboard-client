import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableRow from "@material-ui/core/TableRow";
import { VisuallyHidden, StyledTableCell } from "./styles";
import { ListUsersQueryHookResult } from "../../../../generated/graphql";

interface HeadCell {
  value: keyof Data;
  label: string;
}

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  orderType: string;
  orderBy: string;
  users?: ListUsersQueryHookResult;
}

interface Data {
  created_at: string;
  name: string;
  last_name: string;
  email: string;
  discount: number;
  store: string;
  state: string;
}

const headCells: HeadCell[] = [
  { value: "created_at", label: "Creación" },
  { value: "name", label: "Nombre" },
  { value: "last_name", label: "Apellido" },
  { value: "email", label: "Email" },
  { value: "discount", label: "Descuento" },
  { value: "store", label: "Local" },
  { value: "state", label: "Estado" },
];

export const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
  const { orderType, orderBy, onRequestSort } = props;
  const getOrderType = orderType === "asc" ? "asc" : "desc";

  const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <StyledTableCell />
        {headCells.map((headCell) => (
          <StyledTableCell
            key={headCell.value}
            align="center"
            sortDirection={orderBy === headCell.value ? getOrderType : false}
          >
            <TableSortLabel
              active={orderBy === headCell.value}
              direction={orderBy === headCell.value ? getOrderType : "asc"}
              onClick={createSortHandler(headCell.value)}
            >
              {headCell.label}
              {orderBy === headCell.value ? (
                <VisuallyHidden>
                  {orderType === "desc"
                    ? "sorted descending"
                    : "sorted ascending"}
                </VisuallyHidden>
              ) : null}
            </TableSortLabel>
          </StyledTableCell>
        ))}
        <StyledTableCell key="action" align="center">
          Acción
        </StyledTableCell>
      </TableRow>
    </TableHead>
  );
};

import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { VisuallyHidden } from "./styles";
import { ListUsersQueryHookResult } from "../../../../generated/graphql";

interface HeadCell {
  value: keyof Data;
  label: string;
  numeric: boolean;
}

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  orderType: OrderType;
  orderBy: string;
  users?: ListUsersQueryHookResult;
}

interface Data {
  id: number;
  username: string;
  name: string;
  last_name: string;
  store: string;
  role: string;
  status: string;
}

type OrderType = "asc" | "desc";

const headCells: HeadCell[] = [
  {
    value: "id",
    numeric: false,
    label: "ID",
  },
  { value: "username", numeric: true, label: "Usuario" },
  { value: "name", numeric: true, label: "Nombre" },
  { value: "last_name", numeric: true, label: "Apellido" },
  { value: "store", numeric: true, label: "Tienda" },
  { value: "role", numeric: true, label: "Rol" },
  { value: "status", numeric: true, label: "Estado" },
];

export const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
  const { orderType, orderBy, onRequestSort } = props;

  const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
  ) => {
    console.log(property);
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.value}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.value ? orderType : false}
          >
            <TableSortLabel
              active={orderBy === headCell.value}
              direction={orderBy === headCell.value ? orderType : "asc"}
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
          </TableCell>
        ))}
        <TableCell key="action" align="right">
          Acción
        </TableCell>
      </TableRow>
    </TableHead>
  );
};

import React from "react";
import TableHead from "@material-ui/core/TableHead";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import { VisuallyHidden } from "./styles";

interface HeadCell {
  id: keyof Data;
  label: string;
  numeric: boolean;
}

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => void;
  order: Order;
  orderBy: string;
}

interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

type Order = "asc" | "desc";

const headCells: HeadCell[] = [
  {
    id: "name",
    numeric: false,
    label: "Dessert",
  },
  { id: "calories", numeric: true, label: "Calories" },
  { id: "fat", numeric: true, label: "Fat (g)" },
  { id: "carbs", numeric: true, label: "Carbs (g)" },
  { id: "protein", numeric: true, label: "Protein (g)" },
];

export const EnhancedTableHead: React.FC<EnhancedTableProps> = (props) => {
  const { order, orderBy, onRequestSort } = props;

  const createSortHandler = (property: keyof Data) => (
    event: React.MouseEvent<unknown>
  ) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align={headCell.numeric ? "right" : "left"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <VisuallyHidden>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </VisuallyHidden>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Box from "@material-ui/core/Box";
import { SearchBar } from "../../../components/SearchBar";
import { EnhancedTableHead } from "./EnhancedTableHead";
import { Row } from "./Row";
import { Root, StyledPaper, StyledTable, Title } from "./styles";

type Order = "asc" | "desc";

interface Data {
  calories: number;
  carbs: number;
  fat: number;
  name: string;
  protein: number;
}

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const Desktop: React.FC<{}> = () => {
  const [order, setOrder] = React.useState<Order>("asc");
  const [orderBy, setOrderBy] = React.useState<keyof Data>("calories");

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    // setPage(newPage);
    console.log("sdfasdf");
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // setRowsPerPage(parseInt(event.target.value, 10));
    // setPage(0);
    console.log("erfwt");
  };

  return (
    <Root>
      <StyledPaper>
        <Title variant="h6" id="tableTitle" component="div">
          Nutrition
        </Title>
        <Box pl={2} pt={3} pb={2}>
          <SearchBar placeholder="Buscar usuario" />
        </Box>
        <TableContainer>
          <StyledTable>
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {rows.map((row) => (
                <Row data={row} key={row.name} />
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows.length}
          rowsPerPageOptions={[3, 10, 25]}
          rowsPerPage={3}
          page={1}
          labelRowsPerPage="Filas por página"
          labelDisplayedRows={({ page, count }) => `${page} de ${count}`}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </StyledPaper>
    </Root>
  );
};

export default Desktop;

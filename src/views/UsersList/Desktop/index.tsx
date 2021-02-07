import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Box from "@material-ui/core/Box";
import { Backdrop } from "../../../components/Backdrop";
import { SearchBar } from "../../../components/SearchBar";
import { EnhancedTableHead } from "./EnhancedTableHead";
import { Row } from "./Row";
import { Root, StyledPaper, StyledTable, Title } from "./styles";
import { useListUsersQuery } from "../../../generated/graphql";

interface Data {
  id: number;
  username: string;
  name: string;
  last_name: string;
  store: string;
  role: string;
  status: string;
}

const Desktop: React.FC<{}> = () => {
  const { data, loading, refetch } = useListUsersQuery({
    fetchPolicy: "no-cache",
  });

  const orderBy = data?.listUsers.filters?.order_by;
  const orderType = data?.listUsers.filters?.order_type?.toLowerCase();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && orderType === "asc";
    refetch({
      ...data?.listUsers.filters,
      order_by: property,
      order_type: isAsc ? "DESC" : "ASC",
    });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    refetch({
      ...data?.listUsers.filters,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    refetch({
      ...data?.listUsers.filters,
      per_page: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  const handleSearch = (text: string) => {
    refetch({
      ...data?.listUsers.filters,
      search: text,
    });
  };

  if (loading) {
    return <Backdrop open={true} />;
  }

  return (
    <Root>
      <StyledPaper>
        <Title variant="h6" id="tableTitle" component="div">
          Listado de usuarios
        </Title>
        <Box pl={2} pt={3} pb={2}>
          <SearchBar placeholder="Buscar usuario" search={handleSearch} />
        </Box>
        <TableContainer>
          <StyledTable>
            <EnhancedTableHead
              orderType={orderType!}
              orderBy={orderBy!}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {data?.listUsers?.data!.map((data) => (
                <Row data={data} key={data.id} />
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <TablePagination
          component="div"
          count={data?.listUsers.filters?.count!}
          rowsPerPageOptions={[30, 60, 100]}
          rowsPerPage={data?.listUsers.filters?.per_page!}
          page={data?.listUsers.filters?.page!}
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

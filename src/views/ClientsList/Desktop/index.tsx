import React from "react";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Box from "@material-ui/core/Box";
import { Backdrop } from "../../../components/Backdrop";
import { SearchBar } from "../../../components/SearchBar";
import { EnhancedTableHead } from "./EnhancedTableHead";
import { Row } from "./Row";
import { Button } from "../../../components/Button";
import { Root, StyledPaper, StyledTable, Title } from "./styles";
import { useListClientsQuery } from "../../../generated/graphql";

interface Data {
  created_at: string;
  name: string;
  last_name: string;
  email: string;
  discount: number;
  store: string;
  state: string;
}

const Desktop: React.FC<{}> = () => {
  const { data, loading, refetch } = useListClientsQuery({
    fetchPolicy: "no-cache",
  });

  const orderBy = data?.listClients.filters?.order_by;
  const orderType = data?.listClients.filters?.order_type?.toLowerCase();

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && orderType === "asc";
    refetch({
      ...data?.listClients.filters,
      order_by: property,
      order_type: isAsc ? "DESC" : "ASC",
    });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    refetch({
      ...data?.listClients.filters,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    refetch({
      ...data?.listClients.filters,
      per_page: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  const handleSearch = (text: string) => {
    refetch({
      ...data?.listClients.filters,
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
          Listado de clientes
        </Title>
        <Box px={2} pt={3} pb={2} display="flex" justifyContent="space-between">
          <SearchBar placeholder="Buscar cliente" search={handleSearch} />
          <Button
            size="large"
            type="button"
            onClick={() => console.log("Crear cliente")}
          >
            Crear cliente
          </Button>
        </Box>
        <TableContainer>
          <StyledTable>
            <EnhancedTableHead
              orderType={orderType!}
              orderBy={orderBy!}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {data?.listClients?.data!.map((client) => (
                <Row data={client} key={client.id} />
              ))}
            </TableBody>
          </StyledTable>
        </TableContainer>
        <TablePagination
          component="div"
          count={data?.listClients.filters?.count!}
          rowsPerPageOptions={[30, 60, 100]}
          rowsPerPage={data?.listClients.filters?.per_page!}
          page={data?.listClients.filters?.page!}
          labelRowsPerPage="Filas por página"
          labelDisplayedRows={({ count, from, to }) =>
            `${from}-${to} de ${count}`
          }
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </StyledPaper>
    </Root>
  );
};

export default Desktop;

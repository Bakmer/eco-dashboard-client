import React, { useEffect } from "react";
import { cache } from "../../../app/cache";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Box from "@material-ui/core/Box";
import { Backdrop } from "../../../components/Backdrop";
import { SearchBar } from "../../../components/SearchBar";
import { ViewPaper } from "../../../components/ViewPaper";
import { EnhancedTableHead } from "./EnhancedTableHead";
import { Row } from "./Row";
import { Button } from "../../../components/Button";
import { StyledTable } from "./styles";
import { useListClientsQuery } from "../../../generated/graphql";
import { useHistory } from "react-router-dom";

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
  const { data, loading, refetch } = useListClientsQuery();
  const history = useHistory();

  const orderBy = data?.listClients.filters?.order_by;
  const orderType = data?.listClients.filters?.order_type?.toLowerCase();

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
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

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
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

  useEffect(() => {
    return () => {
      cache.evict({ id: "ROOT_QUERY", fieldName: "listClients" });
    };
  }, []);

  if (loading) {
    return <Backdrop open={loading} />;
  }

  return (
    <ViewPaper title="Listado de clientes">
      <Box px={2} pt={3} pb={2} display="flex" justifyContent="space-between">
        <SearchBar placeholder="Buscar cliente" search={handleSearch} />
        <Button size="large" type="button" onClick={() => history.push("/crear-cliente")}>
          Crear cliente
        </Button>
      </Box>
      <TableContainer>
        <StyledTable>
          <EnhancedTableHead orderType={orderType!} orderBy={orderBy!} onRequestSort={handleRequestSort} />
          <TableBody>
            {data?.listClients?.data!.map((client) => (
              <Row client={client} key={client.id} />
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
        labelDisplayedRows={({ count, from, to }) => `${from}-${to} de ${count}`}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </ViewPaper>
  );
};

export default Desktop;

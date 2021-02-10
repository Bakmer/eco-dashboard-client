import React, { useState } from "react";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Box from "@material-ui/core/Box";
import { Backdrop } from "../../../components/Backdrop";
import { SearchBar } from "../../../components/SearchBar";
import { EnhancedTableHead } from "./EnhancedTableHead";
import { UserForm } from "../UserForm";
import { Row } from "./Row";
import { Modal } from "../../../components/Modal";
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
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  console.log(selectedUser);
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

  const openModal = (user: object) => {
    setSelectedUser(user);
    setShowModal(true);
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
                <Row data={data} openModal={openModal} key={data.id} />
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
          labelDisplayedRows={({ count, from, to }) =>
            `${from}-${to} de ${count}`
          }
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </StyledPaper>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <UserForm
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          onClose={() => setShowModal(false)}
        />
      </Modal>
    </Root>
  );
};

export default Desktop;

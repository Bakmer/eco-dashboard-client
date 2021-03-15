import React, { useState, useEffect } from "react";
import { cache } from "../../../app/cache";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TablePagination from "@material-ui/core/TablePagination";
import Box from "@material-ui/core/Box";
import { Backdrop } from "../../../components/Backdrop";
import { SearchBar } from "../../../components/SearchBar";
import { ViewPaper } from "../../../components/ViewPaper";
import { EnhancedTableHead } from "./EnhancedTableHead";
import { UserForm } from "../UserForm";
import { Row } from "./Row";
import { Modal } from "../../../components/Modal";
import { Button } from "../../../components/Button";
import { useSnackbar } from "notistack";
import { StyledTable } from "./styles";
import {
  useListUsersQuery,
  useDeleteUserMutation,
  // User,
} from "../../../generated/graphql";

interface Data {
  id: number;
  username: string;
  name: string;
  last_name: string;
  store: string;
  role: string;
  state: string;
}

const Desktop: React.FC<{}> = () => {
  const { data, loading, refetch: refetchUsers } = useListUsersQuery();
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState({});
  const { enqueueSnackbar } = useSnackbar();
  const [deleteUser] = useDeleteUserMutation({
    onCompleted: async (res) => {
      await refetchUsers({ ...data?.listUsers.filters });

      enqueueSnackbar(res.deleteUser.message, { variant: "success" });
    },
    onError: (error) => console.log(error.message),
  });

  const orderBy = data?.listUsers.filters?.order_by;
  const orderType = data?.listUsers.filters?.order_type?.toLowerCase();

  const handleRequestSort = (event: React.MouseEvent<unknown>, property: keyof Data) => {
    const isAsc = orderBy === property && orderType === "asc";
    refetchUsers({
      ...data?.listUsers.filters,
      order_by: property,
      order_type: isAsc ? "DESC" : "ASC",
    });
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    refetchUsers({
      ...data?.listUsers.filters,
      page: newPage,
    });
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    refetchUsers({
      ...data?.listUsers.filters,
      per_page: parseInt(event.target.value, 10),
      page: 0,
    });
  };

  const handleSearch = (text: string) => {
    refetchUsers({
      ...data?.listUsers.filters,
      search: text,
    });
  };

  const openModal = (user: object) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  useEffect(() => {
    return () => {
      cache.evict({ id: "ROOT_QUERY", fieldName: "listUsers" });
    };
  }, []);

  if (loading) {
    return <Backdrop open={true} />;
  }

  return (
    <ViewPaper title="Listado de usuarios">
      <Box px={2} pt={3} pb={2} display="flex" justifyContent="space-between">
        <SearchBar placeholder="Buscar usuario" search={handleSearch} />
        <Button size="large" type="button" onClick={() => setShowModal(true)}>
          Crear usuario
        </Button>
      </Box>
      <TableContainer>
        <StyledTable>
          <EnhancedTableHead orderType={orderType!} orderBy={orderBy!} onRequestSort={handleRequestSort} />
          <TableBody>
            {data?.listUsers?.data!.map((user) => (
              <Row user={user} openModal={openModal} deleteUser={deleteUser} key={user.id} />
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
        labelDisplayedRows={({ count, from, to }) => `${from}-${to} de ${count}`}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <UserForm
          selectedUser={selectedUser}
          setSelectedUser={setSelectedUser}
          onClose={() => setShowModal(false)}
          fetchUsers={refetchUsers}
        />
      </Modal>
    </ViewPaper>
  );
};

export default Desktop;

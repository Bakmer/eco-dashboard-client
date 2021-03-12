import React from "react";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";
import { Dropdown } from "../../../../components/Dropdown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useChangeUserStateMutation, UserFragment } from "../../../../generated/graphql";
import { confirmDelete } from "../../../../utils/confirmDelete";
import { TableCell } from "../../../../components/TableCell";

interface RowProps {
  user: UserFragment;
  openModal: Function;
  deleteUser: Function;
}

export const Row: React.FC<RowProps> = ({ user, openModal, deleteUser }) => {
  const [toggleState] = useChangeUserStateMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          listUsers(currentUsers, { readField }) {
            return {
              ...currentUsers,
              data: currentUsers.data.map((currUser: any) =>
                readField("id", currUser) === user.id ? data?.changeUserState.data : currUser
              ),
            };
          },
        },
      });
    },
    onError: (error) => console.log(error.message),
  });

  const handleChange = () => {
    toggleState({ variables: { id: user.id } });
  };

  const menu = [
    {
      icon: <EditIcon fontSize="small" />,
      label: "Ver y editar",
      action: () => {
        openModal({ user });
      },
    },
    {
      icon: <DeleteIcon fontSize="small" />,
      label: "Eliminar",
      action: () => {
        confirmDelete({
          action: () => deleteUser({ variables: { id: user.id } }),
          confirmText: "Desea eliminar el usuario?",
          successText: "Usuario eliminado",
        });
      },
    },
  ];

  return (
    <TableRow>
      <TableCell component="th" scope="row" align="center">
        {user.id}
      </TableCell>
      <TableCell align="center">{user.username}</TableCell>
      <TableCell align="center">{user.name}</TableCell>
      <TableCell align="center">{user.last_name}</TableCell>
      <TableCell align="center">{user.store.name}</TableCell>
      <TableCell align="center">{user.role.name}</TableCell>
      <TableCell align="center">
        <Switch checked={user.state.id === 1 ? true : false} color="primary" onChange={handleChange} name="state" />
      </TableCell>
      <TableCell align="center">
        <Dropdown items={menu} />
      </TableCell>
    </TableRow>
  );
};

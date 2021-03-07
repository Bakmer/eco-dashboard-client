import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";
import { Dropdown } from "../../../../components/Dropdown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { useChangeUserStateMutation } from "../../../../generated/graphql";
import { confirmDelete } from "../../../../utils/confirmDelete";

interface RowProps {
  data: {
    id: number;
    username: string;
    name: string;
    last_name: string;
    store: {
      id: number;
      name: string;
    };
    role: {
      id: number;
      name: string;
    };
    state: {
      id: number;
      name: string;
    };
  };
  openModal: Function;
  deleteUser: Function;
}

export const Row: React.FC<RowProps> = ({ data, openModal, deleteUser }) => {
  const [user, setUser] = useState(data);
  const [toggleState] = useChangeUserStateMutation({
    onCompleted: (res) =>
      setUser({ ...user, state: res.changeUserState.data! }),
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
        openModal({ user, setUser });
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
        <Switch
          checked={user.state.id === 1 ? true : false}
          color="primary"
          onChange={handleChange}
          name="state"
        />
      </TableCell>
      <TableCell align="center">
        <Dropdown items={menu} />
      </TableCell>
    </TableRow>
  );
};

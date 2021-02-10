import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";
import { Dropdown } from "../../../../components/Dropdown";
import EditIcon from "@material-ui/icons/Edit";
import { useChangeUserStatusMutation } from "../../../../generated/graphql";

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
    status: {
      id: number;
      name: string;
    };
  };
  openModal: Function;
}

export const Row: React.FC<RowProps> = ({ data, openModal }) => {
  const [user, setUser] = useState(data);
  const [toggleStatus] = useChangeUserStatusMutation({
    onCompleted: (res) =>
      setUser({ ...user, status: res.changeUserStatus.data! }),
  });

  const handleChange = () => {
    toggleStatus({ variables: { id: user.id } });
  };

  const menu = [
    {
      icon: <EditIcon fontSize="small" />,
      label: "Ver y editar",
      action: () => {
        openModal({ user, setUser });
      },
    },
  ];

  return (
    <TableRow key={user.name}>
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
          checked={user.status.id === 1 ? true : false}
          color="primary"
          onChange={handleChange}
          name="status"
        />
      </TableCell>
      <TableCell align="center">
        <Dropdown items={menu} />
      </TableCell>
    </TableRow>
  );
};

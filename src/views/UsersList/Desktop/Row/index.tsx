import React, { useState } from "react";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";
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
}

export const Row: React.FC<RowProps> = ({ data }) => {
  const [status, setStatus] = useState(data.status.id === 1 ? true : false);
  const [toggleStatus] = useChangeUserStatusMutation({
    onCompleted: (data) => setStatus(data.changeUserStatus.data?.active!),
  });

  const handleChange = () => {
    toggleStatus({ variables: { id: data.id } });
  };

  return (
    <TableRow key={data.name}>
      <TableCell component="th" scope="row" align="center">
        {data.id}
      </TableCell>
      <TableCell align="center">{data.username}</TableCell>
      <TableCell align="center">{data.name}</TableCell>
      <TableCell align="center">{data.last_name}</TableCell>
      <TableCell align="center">{data.store.name}</TableCell>
      <TableCell align="center">{data.role.name}</TableCell>
      <TableCell align="center">
        <Switch
          checked={status}
          color="primary"
          onChange={handleChange}
          name="status"
        />
      </TableCell>
      <TableCell align="center">Action</TableCell>
    </TableRow>
  );
};

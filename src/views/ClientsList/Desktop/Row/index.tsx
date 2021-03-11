import React from "react";
import TableCell from "@material-ui/core/TableCell";
import Switch from "@material-ui/core/Switch";
import { Dropdown } from "../../../../components/Dropdown";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { CollapsibleTable } from "../CollapsibleTable";
import { useChangeClientStateMutation } from "../../../../generated/graphql";
import { formatDate } from "../../../../utils";
import { StyledTableRow } from "./styles";

export interface Phone {
  id: number;
  name: string;
  area_code: string;
  phone: string;
}

export interface Shipping {
  id: number;
  name: string;
  street: string;
  street_number: number;
  cuit: string;
  province: string;
  location: string;
  postal_code: string;
  transport: {
    id: number;
    name: string;
  };
  memo: string;
}

interface RowProps {
  client: {
    id: number;
    name: string;
    last_name: string;
    email: string;
    memo: string;
    store: {
      id: number;
      name: string;
    };
    state: {
      id: number;
      name: string;
    };
    discount: {
      id: number;
      percentage: number;
    };
    phones: Phone[];
    shippings: Shipping[];
    created_at: string;
  };
}

export const Row: React.FC<RowProps> = ({ client }) => {
  const [open, setOpen] = React.useState(false);
  const [toggleState] = useChangeClientStateMutation({
    update(cache, { data }) {
      cache.modify({
        fields: {
          listClients(currentClients, { readField }) {
            return {
              ...currentClients,
              data: currentClients.data.map((currClient: any) =>
                readField("id", currClient) === client.id ? data?.changeClientState.data : currClient
              ),
            };
          },
        },
      });
    },
    onError: (error) => console.log(error.message),
  });
  const collapsibleData = {
    memo: client.memo,
    phones: client.phones,
    shippings: client.shippings,
  };

  const handleChange = () => {
    toggleState({ variables: { id: client.id } });
  };

  const menu = [
    {
      icon: <EditIcon fontSize="small" />,
      label: "Ver y editar",
      action: () => {
        console.log("Ver y editar");
      },
    },
    {
      icon: <DeleteIcon fontSize="small" />,
      label: "Eliminar",
      action: () => {
        console.log("Eliminar");
      },
    },
  ];

  return (
    <React.Fragment>
      <StyledTableRow>
        <TableCell align="center">
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row" align="center">
          {formatDate(client.created_at)}
        </TableCell>
        <TableCell align="center">{client.name}</TableCell>
        <TableCell align="center">{client.last_name}</TableCell>
        <TableCell align="center">{client.email ? client.email : "-"}</TableCell>
        <TableCell align="center">{client.discount.percentage}%</TableCell>
        <TableCell align="center">{client.store.name}</TableCell>
        <TableCell align="center">
          <Switch checked={client.state.id === 1 ? true : false} color="primary" onChange={handleChange} name="state" />
        </TableCell>
        <TableCell align="center">
          <Dropdown items={menu} />
        </TableCell>
      </StyledTableRow>
      <CollapsibleTable open={open} data={collapsibleData} />
    </React.Fragment>
  );
};

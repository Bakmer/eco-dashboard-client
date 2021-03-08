import React from "react";
import { ListItemsWrapper } from "../ListItemsWrapper";
import { ListItemLink } from "../ListItemLink";
import GroupIcon from "@material-ui/icons/Group";

export const Clients: React.FC<{}> = () => {
  return (
    <ListItemsWrapper icon={<GroupIcon />} primary="Clientes">
      <ListItemLink to="/clientes" primary="Listado de clientes" />
      <ListItemLink to="/crear-cliente" primary="Crear" />
    </ListItemsWrapper>
  );
};

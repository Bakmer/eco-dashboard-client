import React from "react";
import { ListItemsWrapper } from "../ListItemsWrapper";
import { ListItemLink } from "../ListItemLink";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

export const Users: React.FC<{}> = () => {
  return (
    <ListItemsWrapper icon={<AssignmentIndIcon />} primary="Usuarios">
      <ListItemLink to="/usuarios" primary="Listado de usuarios" />
    </ListItemsWrapper>
  );
};

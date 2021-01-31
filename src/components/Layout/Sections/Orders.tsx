import React from "react";
import { ListItemsWrapper } from "../ListItemsWrapper";
import { ListItemLink } from "../ListItemLink";
import AssignmentIcon from "@material-ui/icons/Assignment";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

export const Orders: React.FC<{}> = () => {
  return (
    <ListItemsWrapper icon={<AssignmentIcon />} primary="Pedidos">
      <ListItemLink
        to="/inbox"
        primary="Starred"
        icon={<FiberManualRecordIcon />}
      />
    </ListItemsWrapper>
  );
};

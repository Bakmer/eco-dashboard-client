import React, { useState } from "react";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import ListItem from "@material-ui/core/ListItem";
import { StyledList, StyledItemIcon } from "./styles";

interface ListItemsWrapperProps {
  icon: React.ReactElement;
  primary: string;
}

export const ListItemsWrapper: React.FC<ListItemsWrapperProps> = ({
  children,
  icon,
  primary,
}) => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <React.Fragment>
      <ListItem button onClick={handleClick}>
        <StyledItemIcon>{icon}</StyledItemIcon>
        <ListItemText primary={primary} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <StyledList component="div" disablePadding>
          {children}
        </StyledList>
      </Collapse>
    </React.Fragment>
  );
};

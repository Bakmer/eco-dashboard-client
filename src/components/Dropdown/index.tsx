import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemText from "@material-ui/core/ListItemText";
import { StyledListItemIcon } from "./styles";

interface Item {
  icon: JSX.Element;
  label: string;
  action: Function;
}

interface DropdownProps {
  items: Item[];
  size?: "small" | "medium";
}

export const Dropdown: React.FC<DropdownProps> = ({ items, size }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton aria-label="more" aria-haspopup="true" size={size ? size : "small"} onClick={handleClick}>
        <MoreVertIcon />
      </IconButton>
      <Menu id="simple-menu" anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
        {items.map(({ icon, label, action }) => {
          const handleEvent = (event: React.MouseEvent<HTMLElement>) => {
            action();
            handleClose();
          };
          return (
            <MenuItem onClick={handleEvent} key={label}>
              <StyledListItemIcon>{icon}</StyledListItemIcon>
              <ListItemText primary={label} />
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

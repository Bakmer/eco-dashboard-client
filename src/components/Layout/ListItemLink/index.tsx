import React from "react";
import { StyledListItem } from "./styles";
import {
  NavLink as RouterLink,
  NavLinkProps as RouterLinkProps,
} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

interface ListItemLinkProps {
  icon?: React.ReactElement;
  primary: string;
  to: string;
}

export const ListItemLink: React.FC<ListItemLinkProps> = ({
  icon,
  primary,
  to,
}) => {
  const renderLink = React.useMemo(
    () =>
      React.forwardRef<any, Omit<RouterLinkProps, "to">>((itemProps, ref) => (
        <RouterLink
          to={to}
          ref={ref}
          {...itemProps}
          activeClassName="list-item-link--selected"
        />
      )),
    [to]
  );

  return (
    <StyledListItem button component={renderLink}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={primary} />
    </StyledListItem>
  );
};

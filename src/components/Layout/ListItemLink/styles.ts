import styled from "styled-components";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import { NavLink } from "react-router-dom";

export const StyledListItem = styled(ListItem)<
  ListItemProps<React.ElementType, { component: React.ElementType }>
>(({ theme }) => ({
  paddingLeft: theme.spacing(4),
}));

export const RouterLink = styled(NavLink)`
  padding-left: 65px;
`;

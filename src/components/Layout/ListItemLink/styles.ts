import styled from "styled-components";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";

export const StyledListItem = styled(ListItem)<
  ListItemProps<React.ElementType, { component: React.ElementType }>
>(({ theme }) => ({
  paddingLeft: theme.spacing(4),
}));

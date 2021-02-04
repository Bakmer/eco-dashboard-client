import styled from "styled-components";
import List, { ListProps } from "@material-ui/core/List";
import ListItemIcon from "@material-ui/core/ListItemIcon";

export const StyledList = styled(List)<ListProps<"div", { component: "div" }>>`
  .list-item-link--selected {
    .MuiListItemText-primary {
      font-weight: 700;
    }
  }
`;

export const StyledItemIcon = styled(ListItemIcon)`
  min-width: 30px;
`;

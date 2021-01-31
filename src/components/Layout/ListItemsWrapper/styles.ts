import styled from "styled-components";
import List, { ListProps } from "@material-ui/core/List";

export const StyledList = styled(List)<ListProps<"div", { component: "div" }>>`
  .list-item-link--selected {
    .MuiListItemText-primary {
      font-weight: 700;
    }
  }
`;

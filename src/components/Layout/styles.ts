import styled from "styled-components";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";

const drawerWidth = 240;

export const Root = styled.div`
  display: flex;
`;

export const StyledNav = styled.nav(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    width: drawerWidth,
    flexShrink: 0,
  },
}));

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.up("sm")]: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: drawerWidth,
  },
}));

export const StyledIconButton = styled(IconButton)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

// necessary for content to be below app bar
export const ToolbarMixin = styled.div(({ theme }) => theme.mixins.toolbar);

export const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: ${drawerWidth}px;
  }
`;

export const Main = styled.main(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
}));

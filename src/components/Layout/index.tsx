import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Hidden from "@material-ui/core/Hidden";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import { useTheme } from "@material-ui/core/styles";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Sections from "./Sections";
import { useApolloClient } from "@apollo/client";
import { useLogoutMutation } from "../../generated/graphql";
import { isLoggedInVar } from "../../config/cache";

import {
  Root,
  StyledNav,
  StyledAppBar,
  StyledIconButton,
  ToolbarMixin,
  StyledDrawer,
  Main,
  StyledTypography,
} from "./styles";

interface ResponsiveDrawerProps {}

const ResponsiveDrawer: React.FC<ResponsiveDrawerProps> = ({ children }) => {
  const theme = useTheme();
  const client = useApolloClient();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [logout] = useLogoutMutation({
    onCompleted: () => {
      client.clearStore();
      isLoggedInVar(false);
    },
    onError: (error) => console.log(error),
  });

  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logout();
  };

  const drawer = (
    <div>
      <Hidden xsDown>
        <ToolbarMixin />
      </Hidden>
      <Sections />
    </div>
  );

  return (
    <Root>
      <CssBaseline />
      <StyledAppBar position="fixed">
        <Toolbar>
          <StyledIconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </StyledIconButton>
          <StyledTypography variant="h6" noWrap>
            Responsive drawer
          </StyledTypography>
          <div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>Salir</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </StyledAppBar>
      <StyledNav aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp>
          <StyledDrawer
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </StyledDrawer>
        </Hidden>
        <Hidden xsDown>
          <StyledDrawer variant="permanent" open>
            {drawer}
          </StyledDrawer>
        </Hidden>
      </StyledNav>
      <Main>
        <ToolbarMixin />
        {children}
      </Main>
    </Root>
  );
};

export default ResponsiveDrawer;

import React from "react";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { Root, GridContainer, StyledPaper } from "./styles";
import logo from "../../assets/images/ECO-SISTEMA-CON-LOGO.png";

export const Login: React.FC<{}> = () => {
  return (
    <Root>
      <CssBaseline />
      <GridContainer container justify="center" alignItems="center">
        <Grid item>
          <StyledPaper elevation={3}>
            <Box px={3} py={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Box textAlign="center">
                    <img src={logo} alt="logo" width="250px" />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Usuario" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Contraseña" fullWidth />
                </Grid>
                <Grid item xs={12}>
                  <Button size="large" fullWidth>
                    Ingresar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </StyledPaper>
        </Grid>
      </GridContainer>
    </Root>
  );
};

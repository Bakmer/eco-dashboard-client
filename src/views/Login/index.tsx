import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { TextField } from "../../components/TextField";
import { Button } from "../../components/Button";
import { Root, GridContainer, StyledPaper } from "./styles";
import { LOGIN_SCHEMA } from "../../constants/validationSchemas";
import logo from "../../assets/images/ECO-SISTEMA-CON-LOGO.png";
import { useLoginMutation, MeQuery, MeDocument } from "../../generated/graphql";
import { isLoggedInVar } from "../../config/cache";

interface FormData {
  username: string;
  password: string;
}

export const Login: React.FC<{}> = () => {
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(LOGIN_SCHEMA),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [login, { loading }] = useLoginMutation({
    update: (cache, { data }) => {
      cache.writeQuery<MeQuery>({
        query: MeDocument,
        data: {
          me: data!.login,
        },
      });
    },
    onCompleted: () => isLoggedInVar(true),
    onError: (error) => console.log(error),
  });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    login({ variables: formData });
  };

  const TogglePassword: React.FC<{}> = () => {
    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
    };
    return (
      <InputAdornment position="end">
        <IconButton
          aria-label="toggle password visibility"
          onClick={() => setShowPassword(!showPassword)}
          onMouseDown={handleMouseDownPassword}
        >
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </InputAdornment>
    );
  };

  return (
    <Root>
      <CssBaseline />
      <GridContainer container justify="center" alignItems="center">
        <Grid item>
          <StyledPaper elevation={3}>
            <Box px={3} py={4}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Box textAlign="center" mb={1}>
                      <img src={logo} alt="logo" width="250px" />
                    </Box>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Usuario"
                      name="username"
                      ref={register}
                      error={!!errors.username}
                      helperText={errors.username?.message}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Contraseña"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      ref={register}
                      error={!!errors.password}
                      helperText={errors.password?.message}
                      InputProps={{
                        endAdornment: <TogglePassword />,
                      }}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box mt={2}>
                      <Button
                        size="large"
                        type="submit"
                        loading={loading}
                        fullWidth
                      >
                        Ingresar
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </StyledPaper>
        </Grid>
      </GridContainer>
    </Root>
  );
};

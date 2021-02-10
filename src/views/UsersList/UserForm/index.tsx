import React, { useEffect } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import { LOGIN_SCHEMA } from "../../constants/validationSchemas";
import { TextField } from "../../../components/TextField";
import { Select } from "../../../components/Select";
import { Button } from "../../../components/Button";
import Grid from "@material-ui/core/Grid";
import Radio from "@material-ui/core/Radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import {
  useListStoresQuery,
  useListRolesQuery,
  useListStatusQuery,
} from "../../../generated/graphql";
import { StyledRadioGroup } from "./styles";

interface UserFormProps {
  selectedUser: any;
  setSelectedUser: Function;
  onClose: Function;
}

export const UserForm: React.FC<UserFormProps> = ({
  selectedUser,
  setSelectedUser,
  onClose,
}) => {
  const { register, handleSubmit, errors, control } = useForm<FormData>({
    // resolver: yupResolver(LOGIN_SCHEMA),
  });
  const user = selectedUser.user;

  const { data: stores, loading: storesLoading } = useListStoresQuery();
  const { data: roles, loading: rolesLoading } = useListRolesQuery();
  const { data: status } = useListStatusQuery();

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    console.log(formData);
  };

  useEffect(() => {
    return () => setSelectedUser({});
  }, [setSelectedUser]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Usuario"
            name="username"
            defaultValue={user ? user.username : ""}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nombre"
            name="name"
            defaultValue={user ? user.name : ""}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Apellido"
            name="last_name"
            defaultValue={user ? user.last_name : ""}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            name="password"
            defaultValue={user ? user.password : ""}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="store"
            defaultValue={user ? user.store.id : ""}
            render={({ value, onChange }) => (
              <Select
                label="Tienda"
                isLoading={storesLoading}
                value={value}
                onChange={onChange}
                options={stores?.listStores.data!.map((store) => ({
                  value: store.id,
                  label: store.name,
                }))}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="role"
            defaultValue={user ? user.role.id : ""}
            render={({ value, onChange }) => (
              <Select
                label="Rol"
                isLoading={rolesLoading}
                value={value}
                onChange={onChange}
                options={roles?.listRoles.data!.map((role) => ({
                  value: role.id,
                  label: role.name,
                }))}
                fullWidth
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="status"
            defaultValue={user ? user.status.id : 1}
            render={({ value, onChange }) => (
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Estado</FormLabel>
                <StyledRadioGroup
                  aria-label="gender"
                  value={value}
                  onChange={(e) => onChange(Number(e.target.value))}
                >
                  {status?.listStatus.data!.map((status) => (
                    <FormControlLabel
                      value={status.id}
                      control={<Radio />}
                      label={status.name}
                      key={status.id}
                    />
                  ))}
                </StyledRadioGroup>
              </FormControl>
            )}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Button size="large" type="submit" fullWidth>
            Guardar
          </Button>
        </Grid>
        <Grid xs={12} md={6} item>
          <Button
            size="large"
            color="secondary"
            type="button"
            onClick={() => onClose()}
            fullWidth
          >
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { USER_SCHEMA } from "../../../constants/validationSchemas";
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
  useListStatesQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
} from "../../../generated/graphql";
import { StyledRadioGroup } from "./styles";

interface UserFormProps {
  selectedUser: any;
  setSelectedUser: Function;
  onClose: Function;
  fetchUsers: Function;
}

interface FormData {
  username: string;
  name: string;
  last_name: string;
  password: string;
  role_id: number;
  state_id: number;
  store_id: number;
}

export const UserForm: React.FC<UserFormProps> = ({ selectedUser, setSelectedUser, onClose, fetchUsers }) => {
  const { register, handleSubmit, errors, control } = useForm<FormData>({
    resolver: yupResolver(USER_SCHEMA),
  });
  const [isLoading, setIsLoading] = useState(false);
  const { user } = selectedUser;

  const { data: stores, loading: storesLoading } = useListStoresQuery();
  const { data: roles, loading: rolesLoading } = useListRolesQuery();
  const { data: state } = useListStatesQuery();
  const [createUser] = useCreateUserMutation();
  const [updateUser] = useUpdateUserMutation();

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      setIsLoading(true);
      if (user) {
        await updateUser({
          variables: { id: user.id, ...formData },
          update(cache, { data }) {
            cache.modify({
              fields: {
                listUsers(currentUsers, { readField }) {
                  return {
                    ...currentUsers,
                    data: currentUsers.data.map((currUser: any) =>
                      readField("id", currUser) === user.id ? data?.updateUser.data : currUser
                    ),
                  };
                },
              },
            });
          },
        });
      } else {
        await createUser({ variables: formData });
        await fetchUsers();
      }
      setIsLoading(false);
    } catch (error) {
      return console.log(error);
    }

    return onClose();
  };

  useEffect(() => {
    return () => setSelectedUser({});
  }, [setSelectedUser]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Usuario"
            name="username"
            defaultValue={user ? user.username : ""}
            ref={register}
            error={!!errors.username}
            helperText={errors.username?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nombre"
            name="name"
            defaultValue={user ? user.name : ""}
            ref={register}
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Apellido"
            name="last_name"
            defaultValue={user ? user.last_name : ""}
            ref={register}
            error={!!errors.last_name}
            helperText={errors.last_name?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Contraseña"
            name="password"
            defaultValue={user ? user.password : ""}
            ref={register}
            error={!!errors.password}
            helperText={errors.password?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            control={control}
            name="store_id"
            defaultValue={user ? user.store.id : ""}
            render={({ value, onChange }) => (
              <Select
                label="Tienda"
                isLoading={storesLoading}
                value={value}
                onChange={onChange}
                error={!!errors.store_id}
                helperText={errors.store_id?.message}
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
            name="role_id"
            defaultValue={user ? user.role.id : ""}
            render={({ value, onChange }) => (
              <Select
                label="Rol"
                isLoading={rolesLoading}
                value={value}
                onChange={onChange}
                error={!!errors.role_id}
                helperText={errors.role_id?.message}
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
            name="state_id"
            defaultValue={user ? user.state.id : 1}
            render={({ value, onChange }) => (
              <FormControl component="fieldset" fullWidth>
                <FormLabel component="legend">Estado</FormLabel>
                <StyledRadioGroup value={value} onChange={(e) => onChange(Number(e.target.value))}>
                  {state?.listStates.data!.map((state) => (
                    <FormControlLabel value={state.id} control={<Radio />} label={state.name} key={state.id} />
                  ))}
                </StyledRadioGroup>
              </FormControl>
            )}
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Button size="large" type="submit" loading={isLoading} fullWidth>
            Guardar
          </Button>
        </Grid>
        <Grid xs={12} md={6} item>
          <Button size="large" color="secondary" type="button" disabled={isLoading} onClick={() => onClose()} fullWidth>
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

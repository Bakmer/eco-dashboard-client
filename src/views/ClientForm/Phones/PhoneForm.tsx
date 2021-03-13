import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Grid from "@material-ui/core/Grid";
import { TextField } from "../../../components/TextField";
import { Button } from "../../../components/Button";
import Typography from "@material-ui/core/Typography";

interface PhoneFormProps {
  onClose: Function;
}

interface FormData {}

export const PhoneForm: React.FC<PhoneFormProps> = ({ onClose }) => {
  const { register, handleSubmit, errors, control } = useForm<FormData>({
    // resolver: yupResolver(USER_SCHEMA),
  });
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Teléfono
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nota"
            name="Nota"
            // defaultValue={user ? user.username : ""}
            ref={register}
            // error={!!errors.username}
            // helperText={errors.username?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Cód. de area"
            name="name"
            // defaultValue={user ? user.name : ""}
            ref={register}
            // error={!!errors.name}
            // helperText={errors.name?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Número"
            name="name"
            // defaultValue={user ? user.name : ""}
            ref={register}
            // error={!!errors.name}
            // helperText={errors.name?.message}
            fullWidth
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Button type="submit" loading={isLoading} fullWidth>
            Crear
          </Button>
        </Grid>
        <Grid xs={12} md={6} item>
          <Button color="secondary" type="button" disabled={isLoading} onClick={() => onClose()} fullWidth>
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

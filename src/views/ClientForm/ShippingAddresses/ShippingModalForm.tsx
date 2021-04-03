import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CLIENT_PHONE_SCHEMA } from "../../../constants/validationSchemas";
import Grid from "@material-ui/core/Grid";
import { TextField } from "../../../components/TextField";
import { Button } from "../../../components/Button";
import Typography from "@material-ui/core/Typography";
import { ClientFragment, useCreatePhoneMutation } from "../../../generated/graphql";
import { useSnackbar } from "notistack";
import { clientVar } from "../../../app/cache";

interface PhoneFormProps {
  onClose: Function;
  client: ClientFragment;
}

interface FormData {
  name: string;
  area_code: string;
  phone: string;
}

export const ShippingModalForm: React.FC<PhoneFormProps> = ({ onClose, client }) => {
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(CLIENT_PHONE_SCHEMA),
  });
  const { enqueueSnackbar } = useSnackbar();

  const [createPhone, { loading: phoneLoading }] = useCreatePhoneMutation({
    fetchPolicy: "no-cache",
    onCompleted: (res) => {
      clientVar({ ...client, phones: [...client.phones, res.createPhone.data!] });
      enqueueSnackbar(res.createPhone.message, { variant: "success" });
      onClose();
    },
    onError: (error) => console.log(error),
  });

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    return createPhone({ variables: { ...formData, client_id: client.id } });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Agregar Teléfono
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Nota"
            name="name"
            ref={register}
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            label="Cód. de area *"
            name="area_code"
            ref={register}
            type="tel"
            error={!!errors.area_code}
            helperText={errors.area_code?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            label="Número *"
            name="phone"
            ref={register}
            type="tel"
            error={!!errors.phone}
            helperText={errors.phone?.message}
            fullWidth
          />
        </Grid>
        <Grid xs={12} md={6} item>
          <Button type="submit" loading={phoneLoading} fullWidth>
            Crear
          </Button>
        </Grid>
        <Grid xs={12} md={6} item>
          <Button color="secondary" type="button" disabled={phoneLoading} onClick={() => onClose()} fullWidth>
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

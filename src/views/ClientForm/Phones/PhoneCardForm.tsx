import React from "react";
import Grid from "@material-ui/core/Grid";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CLIENT_PHONE_SCHEMA } from "../../../constants/validationSchemas";
import { Button } from "../../../components/Button";
import { TextField } from "../../../components/TextField";
import { ClientPhoneFragment, ClientFragment, useUpdatePhoneMutation } from "../../../generated/graphql";
import { useSnackbar } from "notistack";
import { CardForm } from "../styles";
import { clientVar } from "../../../app/cache";

interface CardFormProps {
  phone: ClientPhoneFragment;
  client: ClientFragment;
  closeCard: Function;
}

interface FormData {
  name: string;
  area_code: string;
  phone: string;
}

export const PhoneCardForm: React.FC<CardFormProps> = ({ phone, client, closeCard }) => {
  const { register, handleSubmit, errors } = useForm<FormData>({
    resolver: yupResolver(CLIENT_PHONE_SCHEMA),
  });
  const { enqueueSnackbar } = useSnackbar();
  const [updatePhone, { loading: updateLoading }] = useUpdatePhoneMutation({
    onCompleted: (res) => {
      clientVar({ ...client, phones: client.phones.map((x) => (x.id === phone.id ? res.updatePhone.data! : x)) });
      enqueueSnackbar(res.updatePhone.message, { variant: "success" });
      closeCard();
    },
    onError: (error) => console.log(error),
  });

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    return updatePhone({
      variables: { ...formData, client_id: client.id, id: phone.id },
    });
  };

  return (
    <CardForm onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            ref={register}
            label="Nota"
            name="name"
            error={!!errors.name}
            helperText={errors.name?.message}
            defaultValue={phone.name}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <TextField
            ref={register}
            label="Cód. area"
            name="area_code"
            error={!!errors.area_code}
            helperText={errors.area_code?.message}
            defaultValue={phone.area_code}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <TextField
            ref={register}
            label="Número"
            name="phone"
            error={!!errors.phone}
            helperText={errors.phone?.message}
            defaultValue={phone.phone}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Button type="submit" loading={updateLoading} fullWidth>
            Guardar
          </Button>
        </Grid>
        <Grid item xs={6}>
          <Button color="secondary" type="button" disabled={updateLoading} onClick={() => closeCard()} fullWidth>
            Cancelar
          </Button>
        </Grid>
      </Grid>
    </CardForm>
  );
};

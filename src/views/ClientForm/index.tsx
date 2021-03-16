import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CLIENT_SCHEMA } from "../../constants/validationSchemas";
import { ViewPaper } from "../../components/ViewPaper";
import Grid from "@material-ui/core/Grid";
import { TextField } from "../../components/TextField";
import { Select } from "../../components/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import { Button } from "../../components/Button";
import {
  useListStatesQuery,
  useListStoresQuery,
  useListDiscountsQuery,
  useCreateClientMutation,
  useUpdateClientMutation,
  useGetClientLazyQuery,
} from "../../generated/graphql";
import { StyledForm, StyledRadioGroup, ButtonWrapper } from "./styles";
import { useSnackbar } from "notistack";
import { Backdrop } from "../../components/Backdrop";
import Divider from "@material-ui/core/Divider";
import { Addresses } from "./Addresses";
import { ShippingAddresses } from "./ShippingAddresses";
import { Phones } from "./Phones";
import { Billings } from "./Billings";
import { useParams } from "react-router-dom";
import { useReactiveVar } from "@apollo/client";
import { clientVar, cache } from "../../app/cache";

interface FormData {
  email: string;
  name: string;
  last_name: string;
  discount_id: number;
  state_id: number;
  store_id: number;
  memo: string;
}

export const ClientForm: React.FC<{}> = () => {
  const { register, handleSubmit, errors, control } = useForm<FormData>({
    resolver: yupResolver(CLIENT_SCHEMA),
  });
  const [isLoading, setIsLoading] = useState(true);
  const { clientId } = useParams<{ clientId: string }>();
  const client = useReactiveVar(clientVar);
  const { enqueueSnackbar } = useSnackbar();
  const { data: stores, loading: storesLoading } = useListStoresQuery();
  const { data: discounts, loading: discountsLoading } = useListDiscountsQuery();
  const { data: state } = useListStatesQuery();

  const [createClient, { loading: createLoading }] = useCreateClientMutation({
    fetchPolicy: "no-cache",
    onCompleted: (res) => {
      clientVar(res.createClient.data);
      enqueueSnackbar(res.createClient.message, { variant: "success" });
    },
    onError: (error) => console.log(error),
  });

  const [updateClient, { loading: updateLoading }] = useUpdateClientMutation({
    fetchPolicy: "no-cache",
    onCompleted: (res) => {
      clientVar(res.updateClient.data);
      enqueueSnackbar(res.updateClient.message, { variant: "success" });
    },
    onError: (error) => console.log(error),
  });

  const [getClient] = useGetClientLazyQuery({
    fetchPolicy: "network-only",
    variables: { id: Number(clientId) },
    onCompleted: (res) => {
      clientVar(res.getClient.data);
      setIsLoading(false);
    },
    onError: (error) => console.log(error),
  });
  console.log(client);

  const onSubmit: SubmitHandler<FormData> = (formData) => {
    if (client) {
      return updateClient({ variables: { ...formData, id: client.id } });
    } else {
      return createClient({ variables: formData });
    }
  };

  useEffect(() => {
    if (clientId) {
      getClient();
    } else {
      setIsLoading(false);
    }

    return () => {
      clientVar(null);
      cache.evict({ id: `Client:${clientId}` });
    };
  }, [clientId, getClient]);

  if (isLoading) {
    return <Backdrop open={isLoading} />;
  }

  return (
    <ViewPaper title={client ? "Editar cliente" : "Crear cliente"}>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              name="name"
              label="Nombre *"
              size="small"
              ref={register}
              error={!!errors.name}
              helperText={errors.name?.message}
              defaultValue={client ? client.name : ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              name="last_name"
              label="Apellido *"
              size="small"
              ref={register}
              error={!!errors.last_name}
              helperText={errors.last_name?.message}
              defaultValue={client ? client.last_name : ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Controller
              control={control}
              name="store_id"
              defaultValue={client ? client.store.id : ""}
              render={({ value, onChange }) => (
                <Select
                  label="Tienda *"
                  isLoading={storesLoading}
                  value={value}
                  onChange={onChange}
                  error={!!errors.store_id}
                  helperText={errors.store_id?.message}
                  options={stores?.listStores.data!.map((store) => ({
                    value: store.id,
                    label: store.name,
                  }))}
                  size="small"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Controller
              control={control}
              name="discount_id"
              defaultValue={client ? client.discount.id : ""}
              render={({ value, onChange }) => (
                <Select
                  label="Descuento *"
                  isLoading={discountsLoading}
                  value={value}
                  onChange={onChange}
                  error={!!errors.discount_id}
                  helperText={errors.discount_id?.message}
                  options={discounts?.listDiscounts.data!.map((discount) => ({
                    value: discount.id,
                    label: `${discount.percentage}%`,
                  }))}
                  size="small"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <TextField
              name="email"
              label="Email"
              size="small"
              ref={register}
              error={!!errors.email}
              helperText={errors.email?.message}
              defaultValue={client ? client.email : ""}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="memo"
              label="Memo"
              size="small"
              ref={register}
              multiline
              rows={3}
              defaultValue={client ? client.memo : ""}
              fullWidth
            />
          </Grid>
          <Grid xs={12} item>
            <Controller
              control={control}
              name="state_id"
              defaultValue={client ? client.state.id : 1}
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
          <ButtonWrapper>
            <Button size="large" type="submit" loading={createLoading || updateLoading} fullWidth>
              {client ? "Guardar" : "Crear"}
            </Button>
          </ButtonWrapper>
        </Grid>
      </StyledForm>
      {client && (
        <React.Fragment>
          <Divider />
          <Phones client={client} />
          <Divider />
          <ShippingAddresses />
          <Divider />
          <Billings />
          <Divider />
          <Addresses />
        </React.Fragment>
      )}
    </ViewPaper>
  );
};

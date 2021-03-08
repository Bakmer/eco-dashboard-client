import React from "react";
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
} from "../../generated/graphql";
import { StyledForm, StyledRadioGroup, ButtonWrapper, SectionTitle, SectionWrapper } from "./styles";
import { useSnackbar } from "notistack";
import Divider from "@material-ui/core/Divider";
import { Addresses } from "./Addresses";
import { ShippingAddresses } from "./ShippingAddresses";
import { Phones } from "./Phones";
import { Billings } from "./Billings";

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
  const { enqueueSnackbar } = useSnackbar();
  const { data: stores, loading: storesLoading } = useListStoresQuery();
  const { data: discounts, loading: discountsLoading } = useListDiscountsQuery();
  const { data: state } = useListStatesQuery();
  const [createClient, { loading, data }] = useCreateClientMutation({
    onCompleted: (res) => enqueueSnackbar(res.createClient.message, { variant: "success" }),
    onError: (error) => console.log(error),
  });
  const [updateClient, { loading: updateLoading }] = useUpdateClientMutation({
    onCompleted: (res) => enqueueSnackbar(res.updateClient.message, { variant: "success" }),
    onError: (error) => console.log(error),
  });
  console.log(data);

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    if (data) {
      return updateClient({ variables: { ...formData, id: data.createClient.data?.id! } });
    } else {
      return createClient({ variables: formData });
    }
  };

  return (
    <ViewPaper title="Crear cliente">
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
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Controller
              control={control}
              name="store_id"
              defaultValue=""
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
              defaultValue=""
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
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField name="memo" label="Memo" size="small" ref={register} multiline rows={3} fullWidth />
          </Grid>
          <Grid xs={12} item>
            <Controller
              control={control}
              name="state_id"
              defaultValue={1}
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
            <Button size="large" type="submit" loading={loading || updateLoading} fullWidth>
              {data ? "Guardar" : "Crear"}
            </Button>
          </ButtonWrapper>
        </Grid>
      </StyledForm>
      {data && (
        <React.Fragment>
          <Divider />
          <SectionWrapper>
            <SectionTitle>Teléfonos</SectionTitle>
            <Phones />
          </SectionWrapper>
          <Divider />
          <SectionWrapper>
            <SectionTitle>Direcciónes de envío</SectionTitle>
            <ShippingAddresses />
          </SectionWrapper>
          <Divider />
          <SectionWrapper>
            <SectionTitle>Facturación</SectionTitle>
            <Billings />
          </SectionWrapper>
          <Divider />
          <SectionWrapper>
            <SectionTitle>Locales</SectionTitle>
            <Addresses />
          </SectionWrapper>
        </React.Fragment>
      )}
    </ViewPaper>
  );
};

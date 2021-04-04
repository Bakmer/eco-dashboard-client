import React, { useState } from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { CLIENT_PHONE_SCHEMA } from "../../../constants/validationSchemas";
import Grid from "@material-ui/core/Grid";
import { TextField } from "../../../components/TextField";
import { Button } from "../../../components/Button";
import Typography from "@material-ui/core/Typography";
import {
  ClientFragment,
  useCreatePhoneMutation,
  useGetProvincesQuery,
  useGetLocationsLazyQuery,
} from "../../../generated/graphql";
import { useSnackbar } from "notistack";
import { clientVar } from "../../../app/cache";
import { AutoComplete } from "../../../components/AutoComplete";

interface PhoneFormProps {
  onClose: Function;
  client: ClientFragment;
}

interface FormData {
  name: string;
  area_code: string;
  phone: string;
  location_id: string;
}

export const ShippingModalForm: React.FC<PhoneFormProps> = ({ onClose, client }) => {
  const { register, handleSubmit, errors, control, setValue } = useForm<FormData>({
    // resolver: yupResolver(CLIENT_PHONE_SCHEMA),
  });
  const [locations, setLocations] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const { data: provinces, loading: provincesLoading } = useGetProvincesQuery();
  const [getLocations, { loading: locationsLoading }] = useGetLocationsLazyQuery({
    fetchPolicy: "no-cache",
    onCompleted: (data) => setLocations(data.getLocations.data.localidades),
  });

  const [createPhone, { loading: phoneLoading }] = useCreatePhoneMutation({
    fetchPolicy: "no-cache",
    onCompleted: (res) => {
      clientVar({ ...client, phones: [...client.phones, res.createPhone.data!] });
      enqueueSnackbar(res.createPhone.message, { variant: "success" });
      onClose();
    },
    onError: (error) => console.log(error),
  });

  const onProvinceChange = (value: any, changeProvince: Function) => {
    changeProvince(value);
    if (value) {
      getLocations({ variables: { province_id: value } });
    } else {
      setLocations([]);
    }
    setValue("location_id", "");
  };

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    return console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h6" align="center">
            Dirección de envío
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Razón social"
            disableSuggestions
            name="name"
            ref={register}
            error={!!errors.name}
            helperText={errors.name?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="Calle *"
            name="street"
            ref={register}
            error={!!errors.area_code}
            helperText={errors.area_code?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Altura *"
            name="street_number"
            ref={register}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Cód postal *"
            name="postal_code"
            ref={register}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField
            label="CUIT *"
            name="cuit"
            disableSuggestions
            ref={register}
            error={!!errors.phone}
            helperText={errors.phone?.message}
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Controller
            control={control}
            name="province_id"
            defaultValue={""}
            render={({ onChange }) => (
              <AutoComplete
                label="Provincia *"
                isLoading={provincesLoading}
                onChange={(value: any) => onProvinceChange(value, onChange)}
                // error={!!errors.store_id}
                // helperText={errors.store_id?.message}
                options={provinces?.getAllProvinces.data!.provincias.map((province: any) => ({
                  value: province.id,
                  label: province.nombre,
                }))}
                fullWidth
                size="small"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <Controller
            control={control}
            name="location_id"
            defaultValue={""}
            render={({ onChange }) => (
              <AutoComplete
                label={!locations.length ? "Seleccione una provincia *" : "Localidad *"}
                isLoading={locationsLoading}
                onChange={onChange}
                // error={!!errors.store_id}
                // helperText={errors.store_id?.message}
                options={locations.map((location: any) => ({
                  value: location.id,
                  label: location.nombre,
                }))}
                disabled={!locations.length}
                fullWidth
                size="small"
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={12}>
          <TextField name="memo" label="Memo" size="small" ref={register} multiline rows={3} fullWidth />
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

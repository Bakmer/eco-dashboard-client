import * as yup from "yup";

const email = {
  email: yup.string().email("Dirección de correo inválida"),
};

const username = {
  username: yup.string().trim().min(3, "Mín. 3 caracteres"),
};

const password = {
  password: yup.string().trim().min(3, "Mín 3 caracteres"),
};

const name = {
  name: yup.string().trim().min(3, "Mín. 3 caracteres"),
};

const last_name = {
  last_name: yup.string().trim().min(3, "Mín. 3 caracteres"),
};

const role_id = {
  role_id: yup.number().typeError("Requerido").required("Requerido"),
};

const state_id = {
  state_id: yup.number().typeError("Requerido").required("Requerido"),
};

const store_id = {
  store_id: yup.number().typeError("Requerido"),
};

const discount_id = {
  discount_id: yup.number().typeError("Requerido").required("Requerido"),
};

export const LOGIN_SCHEMA = yup.object().shape({
  ...username,
  ...password,
});

export const USER_SCHEMA = yup.object().shape({
  ...username,
  ...name,
  ...last_name,
  ...password,
  ...role_id,
  ...state_id,
  ...store_id,
});

export const CLIENT_SCHEMA = yup.object().shape({
  ...email,
  ...name,
  ...last_name,
  ...state_id,
  ...store_id,
  ...discount_id,
});

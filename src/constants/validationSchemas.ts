import * as yup from "yup";

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

const roleId = {
  roleId: yup.number().typeError("Requerido").required("Requerido"),
};

const state_id = {
  state_id: yup.number().typeError("Requerido").required("Requerido"),
};

const storeId = {
  storeId: yup.number().typeError("Requerido").required("Requerido"),
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
  ...roleId,
  ...state_id,
  ...storeId,
});

import * as yup from "yup";

const username = {
  username: yup.string().min(3, "Mín. 3 caracteres"),
};

const password = {
  password: yup.string().min(3, "Mín 3 caracteres"),
};

export const LOGIN_SCHEMA = yup.object().shape({
  ...username,
  ...password,
});

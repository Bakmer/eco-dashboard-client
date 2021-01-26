import React from "react";
import { TextField } from "../../components/TextField";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";

export const Login: React.FC<{}> = () => {
  return (
    <div>
      <TextField />
      <InputField />
      <Button>Hola Mundo</Button>
    </div>
  );
};

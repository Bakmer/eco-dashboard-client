import React from "react";
import { ThemeProvider } from "./theme";
import { TextField } from "./components/TextField";
import { InputField } from "./components/InputField";
import { Button } from "./components/Button";

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider>
      <div>
        Dev branch <TextField label="trest" />
        <InputField />
        <Button size="medium" color="primary">
          fghfh
        </Button>
      </div>
    </ThemeProvider>
  );
};

export default App;

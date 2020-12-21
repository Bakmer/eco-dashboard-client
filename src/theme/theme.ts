import { DefaultTheme } from "styled-components";
import { orange, green } from "@material-ui/core/colors";

const myTheme: DefaultTheme = {
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
};

export { myTheme };

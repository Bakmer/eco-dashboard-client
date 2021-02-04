// import { DefaultTheme } from "styled-components";
import { orange, green } from "@material-ui/core/colors";

const myTheme = {
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: green[500],
    },
  },
  typography: {
    fontSize: 13,
  },
  borderSecondary: "#d6d6d6",
  borderDanger: "#ff6363",
};

export { myTheme };

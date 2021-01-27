import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import ThemeProvider from "./theme";
import SnackbarProvider from "./theme/SnackbarProvider";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <ThemeProvider>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

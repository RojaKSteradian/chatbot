import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { CssBaseline } from "@mui/material";
import { ColorModeProvider } from "./theme/ColourModeProvider";
import MUIThemeProvider from "./theme/ThemeProvider";
import reportWebVitals from "./reportWebVitals";
import { ToastContainer } from 'react-toastify';
import Context from "./components/context/Context";
// import 'bootstrap/dist/css/bootstrap.css';


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ColorModeProvider>
    <MUIThemeProvider>
      <CssBaseline />
      <Context>
      <App />
      </Context>
      <ToastContainer />
    </MUIThemeProvider>
  </ColorModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

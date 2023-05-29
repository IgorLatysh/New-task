import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from "@mui/material";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./components/App";
const theme = createTheme({
    palette: {
        primary: {
            light: "#757ce8",
            main: "#CC4B68",
            dark: "#A50037",
            contrastText: "#fff",
        },
        black: {
            light: "#A50034",
            main: "#000",
            dark: "#757ce8",
            contrastText: "#757ce8",
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000",
        },
    },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
);

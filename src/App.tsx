import { useMemo } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { createTheme, CssBaseline } from "@mui/material";
import Routes from "./components/Routes/Routes";
import "./App.scss";

const App: React.FC = () => {
  const theme: any = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "Roboto",
        },
        components: {
          MuiLink: {
            styleOverrides: {
              root: {
                color: "black",
              },
            },
          },
          MuiFormHelperText: {
            styleOverrides: {
              root: {
                position: "absolute",
                bottom: "-22px",
                left: "0",
                color: "red",
              },
            },
          },
        },
      }),
    []
  );
  return (
    <div className="wrapper">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </Router>
    </div>
  );
};

export default App;

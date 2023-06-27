import { createTheme, ThemeProvider } from "@mui/material/styles";
import Portfolio from "./Pages/portfolio";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Portfolio />
    </ThemeProvider>
  );
}

export default App;

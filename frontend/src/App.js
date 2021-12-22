import { ThemeProvider, createTheme } from "@mui/material/styles";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Bio from "./components/Bio";

// use default theme
// const theme = createTheme();

// Or Create your Own theme:
const theme = createTheme({
  palette: {
    primary: {
      main: "#3B4252",
    },
    secondary: {
      main: "#81A1C1",
    },
  },
});

function App() {
  return (
    <div className="Hobby App">
      <ThemeProvider theme={theme}>
        <Navbar />
        <Bio />
      </ThemeProvider>
    </div>
  );
}

export default App;

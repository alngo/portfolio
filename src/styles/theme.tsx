import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#424242"
    },
    error: {
      main: red.A400
    },
    background: {
      default: "#101010"
    }
  },
  overrides: {
    MuiContainer: {
      root: {
        height: "inherit"
      }
    },
    MuiGrid: {
      root: {
        height: "inherit",
        display: "flex"
      }
    }
  }
});

export default theme;
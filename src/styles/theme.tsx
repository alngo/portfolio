import { red } from "@material-ui/core/colors";
import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

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
  },
  overrides: {
    MuiContainer: {
      root: {
        height: "inherit",
		display: "flex"
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

export default responsiveFontSizes(theme);

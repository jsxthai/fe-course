import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    status: {
      danger: string;
    };
    myShape?: {
      borderRadius: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
    myShape?: {
      borderRadius: string;
    };
  }
}

export default createMuiTheme({
  status: {
    danger: red[500],
  },
  shape: {
    borderRadius: 0,
  },
  overrides: {
    MuiPaper: {},
  },
  myShape: {
    borderRadius: "50px",
  },
});

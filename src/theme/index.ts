import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

export default createMuiTheme({
  status: {
    danger: red[500],
  },
});

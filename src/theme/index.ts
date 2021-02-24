import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";

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
    MuiButton: {
      outlinedSecondary: {
        textTransform: "unset",
        background: "#fff",
        borderRadius: "3px",
        width: "100px",
        height: "40px",
        border: " 1px solid #2896a9",
        color: "#0f7c90",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#f4f4f4",
          color: "#094c59",
          border: " 1px solid #0f7c90",
        },
      },
      outlinedPrimary: {
        width: "100px",
        borderRadius: "3px",
        height: "40px",
        fontWeight: "bold",
        textTransform: "unset",
        backgroundColor: "#0f7c90",
        boxShadow: "none",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#094c59",
        },
      },
    },
  },
  myShape: {
    borderRadius: "50px",
  },
});

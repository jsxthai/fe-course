import { createStyles, makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    login: {
      width: 1340,
      display: "flex",
      justifyContent: "center",
    },
    form: {
      marginTop: "2rem",
      width: 380,
    },
    title: {
      height: 70,
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid  #8a92a3",
    },
    inputForm: {
      padding: "1.5rem 1rem",
      display: "flex",
      flexDirection: "column",
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
      alignItems: "center",
    },
    input: {
      borderRadius: 10,
      display: "block",
    },
    btnLogin: {
      background: "#ec5252",
      fontSize: "2rem",
      padding: "1.7rem",
      margin: theme.spacing(1),
      border: "none",
      "&:hover": {
        opacity: 0.7,
        background: "#ec5252",
        border: "none",
      },
    },
    error: {
      color: "#ec5252",
    },
  })
);

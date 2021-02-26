import { createStyles, makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) =>
  createStyles({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    lecture: {
      display: "flex",
      alignItems: "center",
      margin: "1rem",
      cursor: "pointer",
      "&:hover": {
        color: "red",
      },
    },
    icon: {
      marginRight: "1rem",
    },
  })
);

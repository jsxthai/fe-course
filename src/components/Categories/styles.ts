import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    categories: {
      display: "flex",
      height: "auto",
      flexWrap: "wrap",
    },
    category: {
      maxWidth: "1340px",
      height: "auto",
      padding: "0 2rem",
      fontWeight: "bold",
      display: "flex",
    },
    cateName: {
      margin: "2rem 1.5rem",
      paddingLeft: "1.5rem",
      fontWeight: "bold",
      // maxWidth: 1340,
      flex: 1,
    },
    wrap: {
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
  })
);

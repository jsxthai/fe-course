import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      // flexWrap: "wrap",
      justifyContent: "center",
    },
    courses: {
      maxWidth: 1340,
      display: "flex",
    },
    wrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyItems: "center",
    },
    pagi: {
      width: "auto",
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
    },
    course: {
      margin: "2rem 1rem",
      fontWeight: "bold",
    },
  })
);

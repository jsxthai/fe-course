import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    headerTitle: {
      display: "flex",
      height: "97px",
      justifyContent: "center",
    },
    title: {
      width: "1340px",
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    titleDetail: {
      height: "48px",
      width: "270px",
      display: "flex",
      alignItems: "center",
    },
    logoTitle: {
      width: "48px",
      height: "48px",
      background: "#f2fbfc",
      color: "#0f7c90",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    contentTitle: {},

    titleDetailText: {
      marginLeft: "1rem",
    },
    img: {
      width: "1340px",
      height: "auto",
      background: "#000",
      maxWidth: "100%",
    },
    headerImg: {
      background: "#fff",
      display: "flex",
      justifyContent: "center",
    },
  })
);

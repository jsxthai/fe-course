import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    content: {
      width: 1340,
      display: "flex",
      flexWrap: "wrap-reverse",
    },
    contentLeft: {
      padding: "1.5rem",
      flexBasis: 440,
      flex: 2,
    },
    cententRight: {
      padding: "1.5rem",
      display: "flex",
      justifyContent: "center",
      flex: 1,
    },
    listItemIcon: {
      minWidth: 35,
    },
    intro: {},
    introDetail: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    price: {
      margin: "1.5rem",
      color: "#f05123",
    },
    listItem: {
      margin: 0,
      padding: 0,
    },

    accDetail: {
      padding: "0 1rem",
    },
    accSum: {
      margin: 0,
    },
    btnEnroll: {
      background: "#f05123",
      border: "none",
      "&:hover": {
        opacity: 0.7,
        background: "#f05123",
        border: "none",
      },
    },
    image: {
      width: "340px",
      height: "191px",
    },
    p: {
      margin: "1rem 0",
    },
  })
);

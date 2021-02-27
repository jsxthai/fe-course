import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // maxWidth: 320,
      // width: "auto",
      borderRadius: 4,
    },
    media: {
      height: 160,
      // height: "auto",
      borderRadius: 4,
      border: "1px solid #dcdacb",
      cursor: "pointer",
      "&:hover": {
        opacity: 0.8,
        color: "#094c59",
      },
    },
    bestseller: {
      background: "#ffe799",
      height: 22,
      display: "inline-block",
      borderRadius: 4,
      padding: "4px 8px",
      fontWeight: "bold",
    },
    truncate: {},
  })
);

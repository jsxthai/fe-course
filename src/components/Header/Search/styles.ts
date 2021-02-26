import { createStyles, makeStyles, Theme } from "@material-ui/core";

export default makeStyles((theme: Theme) =>
  createStyles({
    searchForm: {
      flex: 1,
      height: "46px",
      border: "1px solid #989586",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "15px",
      fontSize: "1rem",
    },
    search: {
      marginLeft: "15px",
    },
  })
);

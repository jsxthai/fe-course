import { createStyles, makeStyles } from "@material-ui/core/styles";
export default makeStyles((theme) =>
  createStyles({
    root: {
      "& > *": {
        marginTop: theme.spacing(2),
      },
      width: "auto",
    },
  })
);

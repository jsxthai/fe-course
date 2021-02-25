import {
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    category: {
      width: "1340px",
      height: "auto",
      padding: "0 2rem",
      fontWeight: "bold",
    },
    itemCategoryDetail: {
      minHeight: 76,
    },
    itemCategoryImg: {
      width: 300,
      height: 350,
    },
    itemCategory: {
      border: "1px solid #dcdacb",
      boxSizing: "border-box",
      width: 302,
      height: 426,
      borderRadius: 4,
      cursor: "pointer",
      "&:hover": {
        opacity: 0.8,
      },
    },
    itemCategoryName: {
      padding: "0.5rem 0 0 1rem",
      fontWeight: "bold",
    },
  })
);

const Categories = ({ name, src }: { name: string; src: string }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.itemCategory}>
      <img className={classes.itemCategoryImg} src={src} alt="" />
      <Typography
        gutterBottom
        variant="h5"
        component="h2"
        className={classes.itemCategoryName}
      >
        {name}
      </Typography>
    </Paper>
  );
};

export default Categories;

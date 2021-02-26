import { Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";

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

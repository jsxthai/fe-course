import {
  Button,
  CardActions,
  CardContent,
  CardMedia,
  createStyles,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";

import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 243,
      borderRadius: 4,
    },
    media: {
      height: 138,
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
  })
);

const Course = () => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        title="Paella dish"
        image="https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg?U1A3meyOU2jrEdTUMTvWzJpdzjIzlYdKBUPkVqFiIIyugs2U4PDpgSjwAFxVdJaeAAXA3t3ESRo9vh42eJuKLz4ILX-4t3UYv3FW0s6P3Er7gqSduM16QfwfuihD"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          2021 Complete Python
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {"Thai Pham"}
        </Typography>
        <Paper elevation={0} className={classes.bestseller}>
          Bestseller
        </Paper>
      </CardContent>
    </Card>
  );
};

export default Course;

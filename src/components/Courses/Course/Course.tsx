import {
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
import { Link, Route } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // maxWidth: 300,
      width: 300,
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
  })
);

interface CoursesData {
  id: number;
  name: string;
  price: number;
  user: {
    name: string;
  };
}

const Course = ({ data }: { data: CoursesData }) => {
  const classes = useStyles();

  return (
    <Route>
      <Card className={classes.root}>
        <CardMedia
          component={Link}
          to={`/course/${data.name}`}
          className={classes.media}
          title="Paella dish"
          image="https://img-a.udemycdn.com/course/240x135/567828_67d0.jpg?U1A3meyOU2jrEdTUMTvWzJpdzjIzlYdKBUPkVqFiIIyugs2U4PDpgSjwAFxVdJaeAAXA3t3ESRo9vh42eJuKLz4ILX-4t3UYv3FW0s6P3Er7gqSduM16QfwfuihD"
          // onClick={handleClick}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {data.name}
          </Typography>

          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
          >
            {
              "Learn to create Machine Learning Algorithms in Python and R from two Data Science experts. Code templates included."
            }
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="p"
          >
            {data.user.name}
          </Typography>
          <Paper elevation={0} className={classes.bestseller}>
            Bestseller
          </Paper>
        </CardContent>
      </Card>
    </Route>
  );
};

export default Course;

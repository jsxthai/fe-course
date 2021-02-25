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
import { CoursesData } from "../interface";

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

const Course = ({ data }: { data: CoursesData }) => {
  const classes = useStyles();

  return (
    <Route>
      <Card className={classes.root}>
        <CardMedia
          component={Link}
          to={`/course/${data.id}`}
          className={classes.media}
          title="Paella dish"
          image={data.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {data.name}
          </Typography>

          <Typography gutterBottom variant="subtitle1" component="p">
            {data.description}
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

import { CardContent, CardMedia, Paper, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import React from "react";
import { Link, Route } from "react-router-dom";
import { truncateString } from "../../../helpers/truncate";
import { CoursesData } from "../interface";
import useStyles from "./styles";

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
            {truncateString(data.name, 20)}
          </Typography>

          <Typography
            className={classes.truncate}
            gutterBottom
            variant="subtitle1"
            component="p"
          >
            {truncateString(data.description)}
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            color="textSecondary"
            component="p"
          >
            {truncateString(data.user.name, 20)}
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

import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React from "react";
import Course from "./Course/Course";
import { gql, useQuery } from "@apollo/client";

const GET_COURSES = gql`
  query GetCourse {
    courses {
      id
      name
      price
      user {
        name
      }
    }
  }
`;
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    courses: {
      width: 1340,
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

export default function Courses(): JSX.Element {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_COURSES);

  if (loading) return <div>Loading ... </div>;
  if (error) return <div>Error {error}</div>;

  console.log(data);
  return (
    <>
      <Typography gutterBottom variant="h5" component="h2">
        Courses
      </Typography>
      <div className={classes.root}>
        <Grid
          className={classes.courses}
          container
          alignContent="center"
          alignItems="center"
          justify="space-around"
          spacing={1}
        >
          {data
            ? data.courses.map((course: CoursesData, index: any) => (
                <Grid item key={index}>
                  <Course data={course} />
                </Grid>
              ))
            : null}
        </Grid>
      </div>
    </>
  );
}

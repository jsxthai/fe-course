import { gql, useQuery } from "@apollo/client";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import MyPagination from "../MyPagination";
import Course from "./Course/Course";
import { CoursesData } from "./interface";
import useStyles from "./styles";

const GET_COURSES = gql`
  query GetCourse {
    courses {
      id
      name
      description
      image
      price
      user {
        name
      }
    }
  }
`;

export default function Courses(): JSX.Element {
  const classes = useStyles();
  const { loading, error, data } = useQuery(GET_COURSES);
  const [page, setPage] = useState(1);

  if (loading) return <div>Loading ... </div>;
  if (error) return <div>Error {error}</div>;

  const funcCB = (number: number) => {
    setPage(number);
  };

  // console.log(data);
  return (
    <div className={classes.wrap}>
      <div>
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          className={classes.course}
        >
          All Courses
        </Typography>
        <div className={classes.root}>
          <Grid
            className={classes.courses}
            container
            alignContent="center"
            alignItems="center"
            justify="space-around"
            wrap="wrap"
            spacing={2}
          >
            {
              // pagination with array
              data
                ? data.courses
                    .slice((page - 1) * 4, page * 4)
                    .map((course: CoursesData, index: any) => (
                      <Grid item key={index}>
                        <Course data={course} />
                      </Grid>
                    ))
                : null
            }
          </Grid>
        </div>
      </div>
      <div className={classes.pagi}>
        <MyPagination count={Number(data.courses.length)} func={funcCB} />
      </div>
    </div>
  );
}

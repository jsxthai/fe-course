import Grid from "@material-ui/core/Grid";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import React, { useState } from "react";
import Course from "./Course/Course";
import { gql, useQuery } from "@apollo/client";
import MyPagination from "../MyPagination";

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
    wrap: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    pagi: {
      width: "auto",
      display: "flex",
      justifyItems: "center",
      alignItems: "center",
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
  const [page, setPage] = useState(1);

  if (loading) return <div>Loading ... </div>;
  if (error) return <div>Error {error}</div>;

  const funcCB = (number: number) => {
    console.log(number);
    setPage(number);
  };

  // console.log(data);
  return (
    <div className={classes.wrap}>
      <div>
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

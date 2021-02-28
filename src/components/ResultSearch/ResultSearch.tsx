import { useQuery } from "@apollo/client";
import { Grid } from "@material-ui/core";
import React from "react";
import { useParams } from "react-router-dom";
import Course from "../Courses/Course";
import { SEARCH } from "./gql";
import useStyles from "./styles";

interface KeySearch {
  keySearch: string;
}

const ResultSearch = () => {
  const classes = useStyles();
  const { keySearch } = useParams<KeySearch>();
  const { loading, error, data } = useQuery(SEARCH, {
    variables: {
      filter: keySearch,
    },
  });

  if (loading) return <div>Loading ... </div>;
  if (error) return <div>Not found search with: {keySearch} </div>;
  console.log(data.search);

  return (
    <div className={classes.root}>
      <h2> Result for {keySearch}</h2>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
        spacing={3}
      >
        {data.search.map((course: any, index: any) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <Course data={course} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ResultSearch;

// {
//   data.search.courses.map((item: CoursesData, index: any) => (
//     <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
//       {/* <Course data={item} /> */}
//     </Grid>
//   ));
// }

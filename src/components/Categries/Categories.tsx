import {
  createStyles,
  Grid,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";

import design from "../../assets/images/design.jpg";
import Category from "./Category";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    categories: {
      display: "flex",
      justifyContent: "center",
      height: "933px",
      cursor: "pointer",
    },
    category: {
      width: "1340px",
      height: "auto",
      padding: "0 2rem",
      fontWeight: "bold",
    },
  })
);

const arr = [
  {
    src: "https://s.udemycdn.com/home/top-categories/lohp-category-design.jpg",
    name: "Desgin",
  },
  {
    src:
      "https://s.udemycdn.com/home/top-categories/lohp-category-development.jpg",
    name: "Development",
  },
  {
    src:
      "https://s.udemycdn.com/home/top-categories/lohp-category-marketing.jpg",
    name: "Marketing",
  },
  {
    src:
      "https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software.jpg",
    name: "IT and Software",
  },
  {
    src:
      "https://s.udemycdn.com/home/top-categories/lohp-category-personal-development.jpg",
    name: "Personal Development",
  },
  {
    src:
      "https://s.udemycdn.com/home/top-categories/lohp-category-business.jpg",
    name: "Business",
  },
  {
    src:
      "https://s.udemycdn.com/home/top-categories/lohp-category-photography.jpg",
    name: "Photography",
  },
  {
    src: "https://s.udemycdn.com/home/top-categories/lohp-category-music.jpg",
    name: "Music",
  },
];

const Categories = () => {
  const classes = useStyles();
  return (
    <>
      <Paper elevation={0} className={classes.categories}>
        <Paper elevation={0} className={classes.category}>
          <Typography gutterBottom variant="h5" component="h2">
            Top categories
          </Typography>
          <Grid
            container
            alignContent="center"
            alignItems="center"
            justify="space-around"
            spacing={1}
          >
            {arr.map((item) => (
              <Grid item>
                <Category src={item.src} name={item.name} />
              </Grid>
            ))}
          </Grid>
        </Paper>
      </Paper>
    </>
  );
};

export default Categories;

import { gql, useQuery } from "@apollo/client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  createStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles,
  Paper,
  Theme,
  Typography,
} from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Modal from "../Modal";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    content: {
      width: 1340,
      display: "flex",
      flexWrap: "wrap-reverse",
    },
    contentLeft: {
      padding: "1.5rem",
      flexBasis: 440,
      flex: 2,
    },
    cententRight: {
      padding: "1.5rem",
      display: "flex",
      justifyContent: "center",
      flex: 1,
    },
    listItemIcon: {
      minWidth: 35,
    },
    intro: {},
    introDetail: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    price: {
      margin: "1.5rem",
      color: "#f05123",
    },
    listItem: {
      margin: 0,
      padding: 0,
    },

    accDetail: {
      padding: "0 1rem",
    },
    accSum: {
      margin: 0,
    },
    btnEnroll: {
      background: "#f05123",
      border: "none",
      "&:hover": {
        opacity: 0.7,
        background: "#f05123",
        border: "none",
      },
    },
    image: {
      width: "340px",
      height: "191px",
    },
    p: {
      margin: "1rem 0",
    },
  })
);

const GET_DETAIL_COURSE = gql`
  query CourseDetail($id: ID!) {
    course(id: $id) {
      name
      price
      image
      description
      user {
        name
      }
      CourseDetail {
        id
        text
        courseId
      }
      lecture {
        text
        courseId
        content {
          name
          video
          id
        }
      }
      categories {
        name
      }
    }
  }
`;

const CourseDetail = (): JSX.Element => {
  const classes = useStyles();
  let { id }: { id: string } = useParams();
  const { loading, error, data } = useQuery(GET_DETAIL_COURSE, {
    variables: {
      id: id,
    },
  });

  const [isEnroll, setIsEnroll] = useState(false);

  if (loading) return <div>Loading ... </div>;
  if (error) return <div>Error {error}</div>;

  const handleEnrollCourse = () => {
    setIsEnroll(!isEnroll);
  };
  return (
    <div>
      <Paper elevation={0} className={classes.root}>
        <Paper elevation={0} className={classes.content}>
          <Paper elevation={0} className={classes.contentLeft}>
            <Typography variant="h4" color="initial" component="h1">
              {data.course[0].name}
              {isEnroll && " (you have enrolled)"}
            </Typography>
            <Typography
              variant="subtitle1"
              color="initial"
              component="p"
              className={classes.p}
            >
              {data.course[0].description}
            </Typography>
            {!isEnroll && (
              <div>
                {/* what learn */}
                <Typography variant="h5" color="initial" component="h2">
                  {"What you'll learn"}
                </Typography>

                {/* list */}
                <List>
                  {data
                    ? data.course[0].CourseDetail.map(
                        (item: { id: number; text: string }) => (
                          <ListItem key={item.id} className={classes.listItem}>
                            <ListItemIcon className={classes.listItemIcon}>
                              <Check />
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                          </ListItem>
                        )
                      )
                    : null}
                </List>
              </div>
            )}

            {/* content */}
            <Typography variant="h5" color="initial" component="h2">
              {"Course content"}
            </Typography>

            <div>
              {data
                ? data.course[0].lecture.map((item: any, index: any) => (
                    <Accordion key={index}>
                      <AccordionSummary
                        className={classes.accSum}
                        expandIcon={<ExpandMore className={classes.accSum} />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography>{item.text}</Typography>
                      </AccordionSummary>
                      <AccordionDetails className={classes.accDetail}>
                        <List>
                          <Modal list={item.content} />
                        </List>
                      </AccordionDetails>
                    </Accordion>
                  ))
                : null}
            </div>
          </Paper>

          {/* right */}
          {!isEnroll && (
            <Paper elevation={0} className={classes.cententRight}>
              <Paper elevation={0} className={classes.intro}>
                {/* player */}
                {/* <ReactPlayer
                  width="340px"
                  height="191px"
                  url="https:www.youtube.com/watch?v=ysz5S6PUM-U"
                /> */}
                <img
                  className={classes.image}
                  src={data.course[0].image}
                  alt=" main course"
                />
                <Paper elevation={0} className={classes.introDetail}>
                  <Typography
                    variant="h6"
                    color="initial"
                    component="h3"
                    className={classes.price}
                  >
                    Free
                  </Typography>
                  <Button
                    disableRipple
                    variant="outlined"
                    color="primary"
                    className={classes.btnEnroll}
                    fullWidth
                    onClick={handleEnrollCourse}
                  >
                    Enroll Now
                  </Button>
                  <List>
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Learn any time, any where" />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Step by step guides" />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Learn different tools or technologies" />
                    </ListItem>
                  </List>
                </Paper>
              </Paper>
            </Paper>
          )}
        </Paper>
      </Paper>
    </div>
  );
};

export default CourseDetail;

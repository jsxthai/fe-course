import { gql, useMutation, useQuery } from "@apollo/client";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
import Check from "@material-ui/icons/Check";
import ExpandMore from "@material-ui/icons/ExpandMore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { RootState } from "../../reduxApp/store";
import Modal from "../Modal";
import useStyles from "./styles";

const CREATE_COURSE_ENROLL = gql`
  mutation CreateCourseEnroll($userId: ID!, $courseId: ID!) {
    createCourseEnroll(userId: $userId, courseId: $courseId) {
      success
      message
    }
  }
`;

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

const CHECK_ENROLL_COURSE = gql`
  mutation CheckEnroll($userId: ID!, $courseId: ID!) {
    getCourseEnroll(userId: $userId, courseId: $courseId)
  }
`;

const CourseDetail = (): JSX.Element => {
  const history = useHistory();
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.user);
  const { id }: { id: string } = useParams();
  const [isEnroll, setIsEnroll] = useState(false);

  const jwt = JSON.parse(localStorage.getItem("JWT") || "{}");

  const [createEnroll] = useMutation(CREATE_COURSE_ENROLL, {
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
  });
  const [checkEnroll] = useMutation(CHECK_ENROLL_COURSE, {
    onCompleted: (data) => {
      if (data.getCourseEnroll === true) {
        setIsEnroll(true);
      }
    },
    context: {
      headers: {
        authorization: `Bearer ${jwt}`,
      },
    },
  });

  const { loading, error, data } = useQuery(GET_DETAIL_COURSE, {
    variables: {
      id: id,
    },
  });

  useEffect(() => {
    if (user.id) {
      checkEnroll({
        variables: {
          userId: Number(user.id),
          courseId: Number(id),
        },
      });
    }
  }, [checkEnroll, id, user.id]);

  if (loading) return <div>Loading ... </div>;
  if (error) return <div>Error {error}</div>;

  const handleEnrollCourse = () => {
    if (user.id) {
      createEnroll({
        variables: {
          userId: Number(user.id),
          courseId: Number(id),
        },
      });
      checkEnroll({
        variables: {
          userId: Number(user.id),
          courseId: Number(id),
        },
      });
    } else {
      history.push("/login");
    }
  };
  return (
    <div>
      <Paper elevation={0} className={classes.root}>
        <Paper elevation={0} className={classes.content}>
          <Paper elevation={0} className={classes.contentLeft}>
            <Typography variant="h4" color="initial" component="h1">
              {data.course[0].name}
              {isEnroll && <span>(you have enrolled)</span>}
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

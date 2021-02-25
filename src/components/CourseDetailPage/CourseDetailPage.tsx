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
import React from "react";
import ReactPlayer from "react-player";
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
  })
);

const GET_DETAIL_COURSE = gql`
  query CourseDetail($id: ID!) {
    course(id: $id) {
      name
      price
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

  if (loading) return <div>Loading ... </div>;
  if (error) return <div>Error {error}</div>;

  const isEnroll = false;

  return (
    <div>
      <Paper elevation={0} className={classes.root}>
        <Paper elevation={0} className={classes.content}>
          <Paper elevation={0} className={classes.contentLeft}>
            <Typography variant="h4" color="initial" component="h1">
              {"Kiến thức cơ bản, cốt lõi dân IT cần học trước"}
            </Typography>
            <Typography variant="subtitle1" color="initial" component="p">
              {
                "Kiến thức cơ bản dành cho dân IT, không phân biệt bạn theo Front-end, Back-end hay Devops"
              }
            </Typography>
            {!isEnroll && (
              <div>
                {/* what learn */}
                <Typography variant="h5" color="initial" component="h2">
                  {"Bạn sẽ học được gì"}
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
              {"Nội dung khóa học"}
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
                <ReactPlayer
                  width="340px"
                  height="191px"
                  url="https:www.youtube.com/watch?v=ysz5S6PUM-U"
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
                  >
                    Tham gia
                  </Button>
                  <List>
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Học mọi lúc, mọi nơi" />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Lộ trình học tiêu chuẩn" />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Trình độ cơ bản" />
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

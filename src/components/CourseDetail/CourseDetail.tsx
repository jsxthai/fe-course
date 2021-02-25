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

function generate(element: React.ReactElement) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const CourseDetail = (): JSX.Element => {
  let { name }: { name: string } = useParams();
  const classes = useStyles();
  if (name === "10") {
    return <h1>not found course: {name}</h1>;
  }

  const isEnroll = false;
  // modal

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
                <Typography variant="subtitle1" color="initial" component="p">
                  {"Kiến thức cơ bản, cốt lõi dân IT cần học trước"}
                </Typography>
                {/* list */}
                <List>
                  {generate(
                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Single-line item" />
                    </ListItem>
                  )}
                </List>
              </div>
            )}

            {/* content */}
            <Typography variant="h5" color="initial" component="h2">
              {"Nội dung khóa học"}
            </Typography>

            <div>
              <Accordion>
                <AccordionSummary
                  className={classes.accSum}
                  expandIcon={<ExpandMore className={classes.accSum} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{"Phan 1"}</Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accDetail}>
                  <List>
                    <Modal />
                  </List>
                </AccordionDetails>
              </Accordion>

              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>{"Phan 1"}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <List>
                    <Modal />
                  </List>
                </AccordionDetails>
              </Accordion>
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
                      <ListItemText primary="Single-line itssssssssssem" />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Single-em sssssss" />
                    </ListItem>

                    <ListItem className={classes.listItem}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <Check />
                      </ListItemIcon>
                      <ListItemText primary="Sinne item" />
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

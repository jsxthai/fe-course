import { Hidden } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MovieIcon from "@material-ui/icons/Movie";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import React from "react";
import imageHeader from "../../../assets/images/imageHeader.jpg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerTitle: {
      display: "flex",
      height: "97px",
      justifyContent: "center",
    },
    title: {
      width: "1340px",
      height: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
    },
    titleDetail: {
      height: "48px",
      width: "270px",
      display: "flex",
      alignItems: "center",
    },
    logoTitle: {
      width: "48px",
      height: "48px",
      background: "#f2fbfc",
      color: "#0f7c90",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    contentTitle: {},

    titleDetailText: {
      marginLeft: "1rem",
    },
    img: {
      width: "1340px",
      height: "auto",
      background: "#000",
      maxWidth: "100%",
    },
    headerImg: {
      background: "#fff",
      display: "flex",
      justifyContent: "center",
    },
  })
);

export default function Variants() {
  const classes = useStyles();

  return (
    <>
      <Paper className={classes.headerImg}>
        <img className={classes.img} src={imageHeader} alt="header" />
      </Paper>

      <Hidden smDown>
        <Paper className={classes.headerTitle}>
          <Paper elevation={0} className={classes.title}>
            <Paper elevation={0} className={classes.titleDetail}>
              <div className={classes.logoTitle}>
                <MovieIcon />
              </div>
              <div className={classes.titleDetailText}>
                <h2>130 online courses</h2>
                <div>Enjoy a variety of fresh topics</div>
              </div>
            </Paper>
            <Paper elevation={0} className={classes.titleDetail}>
              <div className={classes.logoTitle}>
                <LocalLibraryIcon />
              </div>
              <div className={classes.titleDetailText}>
                <h2>Expert instruction</h2>
                <div>Find the right instructor for you</div>
              </div>
            </Paper>
            <Paper elevation={0} className={classes.titleDetail}>
              <div className={classes.logoTitle}>
                <OndemandVideoIcon />
              </div>
              <div className={classes.titleDetailText}>
                <h2>Lifetime access</h2>
                <div>Learn on your schedule</div>
              </div>
            </Paper>
          </Paper>
        </Paper>
      </Hidden>
    </>
  );
}

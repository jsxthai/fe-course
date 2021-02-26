import { Hidden } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import MovieIcon from "@material-ui/icons/Movie";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import React from "react";
import imageHeader from "../../../assets/images/imageHeader.jpg";
import useStyles from "./styles";

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

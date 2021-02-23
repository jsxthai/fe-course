import { Button, ButtonBase, InputBase } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import logo from "../../assets/images/logo.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      background: "#fff",
      height: "72px",
      witdh: "90vw",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      justifyContent: "space-between",
    },
    cateMenu: {
      height: "100%",
      // justifyContent: "center",
      // alignItems: "center",
      lineHeight: "50%",
    },
    img: {
      width: "1340px",
      height: "400px",
      background: "#000",
    },
    headerImg: {
      background: "#bbbbbb",
      display: "flex",
      justifyContent: "center",
    },
    headerTitle: {
      display: "flex",
      background: "#bbbbbb",
      height: "97px",
      justifyContent: "center",
    },
    title: {
      background: "red",
      width: "1340px",
      height: "auto",
    },

    courses: {
      background: "#bbbbbb",
      display: "flex",
      justifyContent: "center",
      height: "1100px",
    },
    course: {
      background: "lightblue",
      width: "1340px",
      height: "auto",
    },

    categories: {
      background: "#bbbbbb",
      display: "flex",
      justifyContent: "center",
      height: "933px",
    },

    category: {
      background: "yellow",
      width: "1340px",
      height: "auto",
    },
    logo: {
      width: "110px",
      height: "31px",
      cursor: "pointer",
      marginLeft: "1rem",
    },
    searchForm: {
      flex: 1,
      height: "46px",
      border: "1px solid #989586",
      borderRadius: "9999px",
      display: "flex",
      alignItems: "center",
      paddingLeft: "15px",
      fontSize: "1rem",
    },
    search: {
      marginLeft: "15px",
    },
    leftMenu: {
      display: "flex",
      width: "60%",
      alignItems: "center",
      justifyContent: "flex-start",
      marginleft: "3rem",
    },
    rightMenu: {
      display: "flex",
      alignItems: "center",
      marginRight: "3rem",
    },
    menuCategory: {
      margin: "0 1.5rem",
    },
  })
);

// #3c3b37

export default function Variants() {
  const classes = useStyles();

  return (
    <Paper className={classes.body}>
      <Paper elevation={0} className={classes.header}>
        <div className={classes.leftMenu}>
          <img className={classes.logo} src={logo} alt={"logo"} />

          <ButtonBase className={classes.menuCategory} disableRipple>
            Categories
          </ButtonBase>
          <form action="" className={classes.searchForm}>
            <ButtonBase disableRipple>
              <SearchIcon style={{ color: "#73726c" }}></SearchIcon>
            </ButtonBase>
            <InputBase
              className={classes.search}
              placeholder="Search ..."
            ></InputBase>
          </form>
        </div>
        <div className={classes.rightMenu}>
          <Button>Sign up</Button>
          <Button>Login</Button>
        </div>
      </Paper>
      <Paper className={classes.headerImg}>
        <Paper className={classes.img}></Paper>
      </Paper>

      <Paper className={classes.headerTitle}>
        <Paper className={classes.title}> </Paper>
      </Paper>

      <Paper className={classes.courses}>
        <Paper className={classes.course}> </Paper>
      </Paper>

      <Paper className={classes.categories}>
        <Paper className={classes.category}> </Paper>
      </Paper>
    </Paper>
  );
}

import { Button, ButtonBase, InputBase } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import logo from "../../assets/images/logo.svg";
import imageHeader from "../../assets/images/imageHeader.jpg";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MovieIcon from "@material-ui/icons/Movie";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    body: {
      display: "flex",
      flexDirection: "column",
    },
    header: {
      display: "flex",
      height: "72px",
      witdh: "90vw",
      flexDirection: "row",
      alignItems: "center",
      position: "relative",
      justifyContent: "space-between",
      boxShadow: "0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%)",
    },
    cateMenu: {
      height: "100%",
      lineHeight: "50%",
    },
    img: {
      width: "1340px",
      height: "400px",
      background: "#000",
    },
    headerImg: {
      background: "#fff",
      display: "flex",
      justifyContent: "center",
    },
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
    cartIcon: {
      margin: "0 1.3rem",
    },
    margin03: {
      margin: "0.3rem",
    },
  })
);

// #3c3b37
// media 800px

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
              <SearchIcon style={{ color: "#73726c" }} />
            </ButtonBase>
            <InputBase
              className={classes.search}
              placeholder="Search ..."
            ></InputBase>
          </form>
        </div>
        <div className={classes.rightMenu}>
          <ButtonBase disableRipple className={classes.cartIcon}>
            <AddShoppingCartIcon />
          </ButtonBase>
          <Button disableRipple variant="outlined" color="secondary">
            Log in
          </Button>
          <div className={classes.margin03}></div>
          <Button disableRipple variant="outlined" color="primary">
            Sign up
          </Button>
        </div>
      </Paper>

      <Paper className={classes.headerImg}>
        <img className={classes.img} src={imageHeader} alt="header" />
      </Paper>

      <Paper className={classes.headerTitle}>
        <Paper elevation={0} className={classes.title}>
          <Paper elevation={0} className={classes.titleDetail}>
            <div className={classes.logoTitle}>
              <MovieIcon />
            </div>
            <div>
              <div>130,000 online courses</div>
              <div>Enjoy a variety of fresh topics</div>
            </div>
          </Paper>
          <Paper elevation={0} className={classes.titleDetail}>
            <div className={classes.logoTitle}>
              <MovieIcon />
            </div>
            <div>
              <div>Expert instruction</div>
              <div>Find the right instructor for you</div>
            </div>
          </Paper>
          <Paper elevation={0} className={classes.titleDetail}>
            <div className={classes.logoTitle}>
              <MovieIcon />
            </div>
            <div>
              <div>Lifetime access</div>
              <div>Learn on your schedule</div>
            </div>
          </Paper>
        </Paper>
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

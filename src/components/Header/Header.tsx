import { Button, ButtonBase, InputBase } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import Search from "./Search";

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
      display: "flex",
      justifyContent: "center",
    },
    course: {
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
    titleDetailText: {
      marginLeft: "1rem",
    },
    link: {
      textDecoration: "none",
      color: "#3c3b37",
    },
  })
);

export default function Variants() {
  const classes = useStyles();

  return (
    <>
      <Paper elevation={0} className={classes.header}>
        <div className={classes.leftMenu}>
          <Link to="/">
            <img className={classes.logo} src={logo} alt={"logo"} />
          </Link>

          <Link to="/categories" className={classes.link}>
            <ButtonBase className={classes.menuCategory} disableRipple>
              Categories
            </ButtonBase>
          </Link>
          {/* //search */}
          <Search />
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
      {/* 

      <HeaderTitle /> */}
    </>
  );
}

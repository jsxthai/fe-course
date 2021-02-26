import { Button, ButtonBase, Hidden } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { RootState } from "../../reduxApp/store";
import Search from "./Search";
import useStyles from "./styles";
import User from "./User";

export default function Variants() {
  const classes = useStyles();
  const user = useSelector((state: RootState) => state.user);

  return (
    <Paper elevation={0} className={classes.body}>
      <Paper elevation={0} className={classes.header}>
        <div className={classes.leftMenu}>
          <Hidden smUp>
            <ButtonBase disableRipple className={classes.cartIcon}>
              <MenuIcon />
            </ButtonBase>
          </Hidden>

          <Link to="/">
            <img className={classes.logo} src={logo} alt={"logo"} />
          </Link>

          <Hidden smDown>
            <Link to="/categories" className={classes.link}>
              <ButtonBase className={classes.menuCategory} disableRipple>
                Categories
              </ButtonBase>
            </Link>
          </Hidden>

          <Hidden xsDown>
            <Search />
          </Hidden>

          <ButtonBase disableRipple className={classes.cartIcon}>
            <AddShoppingCartIcon />
          </ButtonBase>

          {!user.isLogin ? (
            <Hidden smDown>
              <Link to="/login" className={classes.link}>
                <Button disableRipple variant="outlined" color="secondary">
                  Log in
                </Button>
              </Link>
              <div className={classes.margin03}></div>
              <Link to="/signup" className={classes.link}>
                <Button disableRipple variant="outlined" color="primary">
                  Sign up
                </Button>
              </Link>
              <div className={classes.margin03}></div>
            </Hidden>
          ) : (
            <>
              <User />
              <div className={classes.margin03}></div>
            </>
          )}
        </div>
      </Paper>
    </Paper>
  );
}

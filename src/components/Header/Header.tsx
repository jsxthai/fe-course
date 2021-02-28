import {
  Button,
  ButtonBase,
  Drawer,
  Hidden,
  Menu,
  MenuItem,
  MenuProps,
  withStyles,
} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { RootState } from "../../reduxApp/store";
import DropDown from "./DropDown";
import Search from "./Search";
import useStyles from "./styles";
import User from "./User";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

export default function Variants() {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector((state: RootState) => state.user);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [isDrawer, setIsDrawer] = React.useState(false);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event: React.MouseEvent<HTMLElement>) => {
    history.push("/search/" + event.currentTarget.textContent);
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    console.log("clcick");
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setIsDrawer(open);
  };

  const getIsCloseForm = (data: boolean) => {
    setIsDrawer(data);
  };

  return (
    <Paper elevation={0} className={classes.body}>
      <Paper elevation={0} className={classes.header}>
        <div className={classes.leftMenu}>
          <Hidden smUp>
            <ButtonBase
              onClick={toggleDrawer(true)}
              disableRipple
              className={classes.cartIcon}
            >
              <MenuIcon />
            </ButtonBase>
            <Drawer anchor="left" open={isDrawer} onClose={toggleDrawer(false)}>
              <DropDown cb={getIsCloseForm} />
            </Drawer>
          </Hidden>

          <Link to="/">
            <img className={classes.logo} src={logo} alt={"logo"} />
          </Link>

          <Hidden smDown>
            <ButtonBase
              aria-controls="menu-categories"
              className={classes.menuCategory}
              aria-haspopup="true"
              disableRipple
              onClick={handleClick}
            >
              Categories
            </ButtonBase>
            <StyledMenu
              id="menu-categories"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>Web Development</MenuItem>
              <MenuItem onClick={handleClose}>Mobile Development</MenuItem>
              <MenuItem onClick={handleClose}>Data Science</MenuItem>
            </StyledMenu>
            {/* </Link> */}
          </Hidden>

          <Hidden xsDown>
            <Search cb={getIsCloseForm} />
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

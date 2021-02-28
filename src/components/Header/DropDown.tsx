import { Button, List, MenuItem } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import Search from "./Search";
import useStyles from "./styles";

const DropDown = ({ cb }: { cb: Function }) => {
  const classes = useStyles();
  const history = useHistory();

  const handleClickMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log(event.currentTarget.textContent);
    history.push("/search/" + event.currentTarget.textContent);

    cb(false);
  };

  const handleClick = () => {
    cb(false);
  };

  return (
    <div>
      <div role="presentation" className={classes.list}>
        <List
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "2rem",
            alignItems: "center",
          }}
        >
          <Search cb={handleClick} />

          <div className={classes.spacing}>
            <MenuItem onClick={handleClickMenu}>Web Development</MenuItem>
            <MenuItem onClick={handleClickMenu}>Mobile Development</MenuItem>
            <MenuItem onClick={handleClickMenu}>Data Science</MenuItem>
          </div>

          <Link to="/login" className={classes.link}>
            <Button
              disableRipple
              variant="outlined"
              color="secondary"
              onClick={handleClick}
            >
              Log in
            </Button>
          </Link>
          <div className={classes.margin03}></div>
          <Link to="/signup" className={classes.link}>
            <Button
              disableRipple
              variant="outlined"
              color="primary"
              onClick={handleClick}
            >
              Sign up
            </Button>
          </Link>
          <div className={classes.margin03}></div>
        </List>
      </div>
    </div>
  );
};

export default DropDown;

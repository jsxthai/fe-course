import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    img: {
      width: 32,
      height: 32,
      borderRadius: "50%",
    },
  })
);

const User = () => {
  const classes = useStyles();
  return (
    <div>
      <img
        className={classes.img}
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAIAAAD8GO2jAAAAA3NCSVQICAjb4U/gAAAABmJLR0QAAQBXAJvKDeA2AAAA+0lEQVRIiWNkDJ/NQEvARFPTRy0YtWDUAgYGBgYGFoIqbDQkJAU44dxHb76evPOKmhbUhxg560ghi3z+/vvg9ef5C47ff/WZChZAwLRd1158+M7AwMDPxWarIeFjJCfKx2FZs4lqFpy7/3be/ptw7s3+MFNlUXstyYPXnuPXSGYk33/9iYmR0UBemKBKMi2QEeL5/5/h+tMPBFUSG0RKYrxJjuoMDAzCPOyuetJaMgIXH77bdekJ1SyoCjSAs3/9+Xfw2vPSJSeJ0UisBb1bLj9684WBgeHN5x/Lj94lUhcJFlx/+gE5FREPhn5ZRHMLGEebLaMWjFpAewsAdBlLyS7S4MgAAAAASUVORK5CYII="
        alt=""
      />
    </div>
  );
};

export default User;

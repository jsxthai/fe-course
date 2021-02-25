import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import React from "react";
import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: "flex",
      justifyContent: "center",
    },
    login: {
      width: 1340,
      display: "flex",
      justifyContent: "center",
    },
    form: {
      marginTop: "2rem",
      width: 380,
    },
    title: {
      height: 70,
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      borderBottom: "1px solid  #8a92a3",
    },
    inputForm: {
      padding: "1.5rem 1rem",
      display: "flex",
      flexDirection: "column",
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
      },
      alignItems: "center",
    },
    input: {
      borderRadius: 10,
      display: "block",
    },
    btnLogin: {
      background: "#ec5252",
      fontSize: "2rem",
      padding: "1.7rem",
      margin: theme.spacing(1),
      border: "none",
      "&:hover": {
        opacity: 0.7,
        background: "#ec5252",
        border: "none",
      },
    },
  })
);

const Signup = () => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      <Paper elevation={0} className={classes.login}>
        <Paper elevation={0} className={classes.form}>
          <Paper elevation={0} className={classes.title}>
            <Typography variant="h6" color="initial" component="h1">
              Sign Up and Start Learning!
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.inputForm}>
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Full Name"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Email"
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              id="outlined-required"
              label="Password"
              variant="outlined"
            />
            <Button
              disableRipple
              variant="outlined"
              color="primary"
              className={classes.btnLogin}
              fullWidth
              // onClick={handleEnrollCourse}
            >
              Signup
            </Button>
          </Paper>
        </Paper>
      </Paper>
    </Paper>
  );
};

export default Signup;

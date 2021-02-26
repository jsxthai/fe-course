import { gql, useMutation } from "@apollo/client";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login as userLogin } from "../../features/user/userSilce";

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
    error: {
      color: "#ec5252",
    },
  })
);

const LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        name
        email
        role
        id
      }
      token
    }
  }
`;

type FormData = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();

  const history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<FormData>();

  const [login, { loading, error }] = useMutation(LOGIN, {
    onCompleted: (data) => {
      if (data.login && data.login.user && data.login.user.role === "user") {
        if (data.login.token) {
          localStorage.setItem("JWT", JSON.stringify(data.login.token));
        }
        dispatch(
          userLogin({
            isLogin: true,
            ...data.login.user,
          })
        );
        // history.push("/");
        history.goBack();
      }
      if (data.login && data.login.user && data.login.user.role === "admin") {
        history.push("/dashboard");
      }
    },
    onError: (error) => console.error("LOGIN error", error),
  });
  const onSubmit = (data: FormData) => {
    login({
      variables: {
        ...data,
      },
    });
  };

  return (
    <Paper elevation={0} className={classes.root}>
      <Paper elevation={0} className={classes.login}>
        <Paper elevation={0} className={classes.form}>
          <Paper elevation={0} className={classes.title}>
            <Typography variant="h6" color="initial" component="h1">
              Log In to Your Udemy Account!
            </Typography>
          </Paper>

          <Paper elevation={0} className={classes.inputForm}>
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* ref in TextField: thay ref = inputRef */}
              {error && (
                <Typography
                  variant="h6"
                  color="initial"
                  component="p"
                  className={classes.error}
                >
                  Login fail
                </Typography>
              )}
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Email"
                variant="outlined"
                name="email"
                inputRef={register}
                error={!!errors.email}
                helperText={errors.email ? errors.email.message : ""}
              />
              <TextField
                required
                fullWidth
                label="Password"
                variant="outlined"
                name="password"
                inputRef={register}
                error={!!errors.password}
                helperText={errors.password ? errors.password.message : ""}
              />
              <Button
                disableRipple
                variant="outlined"
                color="primary"
                className={classes.btnLogin}
                fullWidth
                type="submit"
              >
                {loading ? " Loading ..." : "Login"}
              </Button>
            </form>
          </Paper>
        </Paper>
      </Paper>
    </Paper>
  );
};

export default Login;

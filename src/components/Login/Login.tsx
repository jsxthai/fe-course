import { useMutation } from "@apollo/client";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login as userLogin } from "../../features/user/userSilce";
import { LOGIN } from "./gql";
import useStyles from "./styles";

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

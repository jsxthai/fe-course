import { Button, Paper, TextField, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import React from "react";
import { useForm } from "react-hook-form";
import { gql, useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
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

const SIGNUP = gql`
  mutation CreateUser($name: String!, $email: String!, $password: String!) {
    createUser(
      registerInput: { name: $name, email: $email, password: $password }
    ) {
      token
      user {
        name
        email
        role
      }
    }
  }
`;

type FormSignup = {
  name: string;
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm<FormSignup>();

  const [createUser, { loading, error }] = useMutation(SIGNUP, {
    onCompleted: (data) => {
      if (
        data.createUser &&
        data.createUser.user &&
        data.createUser.user.role === "user"
      ) {
        if (data.createUser.token) {
          localStorage.setItem("JWT", JSON.stringify(data.createUser.token));
        }
        dispatch(
          userLogin({
            isLogin: true,
            ...data.createUser.user,
          })
        );
        history.push("/");
      }
    },
    onError: (error) => console.error("SIGN error", error),
  });

  const onSubmit = (data: FormSignup) => {
    createUser({
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
              Sign Up and Start Learning!
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
                  Sign up fail
                </Typography>
              )}
              <TextField
                required
                fullWidth
                id="outlined-required"
                label="Full Name"
                variant="outlined"
                name="name"
                inputRef={register}
                error={!!errors.name}
                helperText={errors.name ? errors.name.message : ""}
              />
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
                {loading ? " Loading ..." : "Sign up"}
              </Button>
            </form>
          </Paper>
        </Paper>
      </Paper>
    </Paper>
  );
};

export default Login;

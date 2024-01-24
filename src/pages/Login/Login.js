import React from "react";
// import { makeStyles } from "@mui/styles/makeStyles";
import {
  Checkbox,
  TextField,
  Button,
  Typography,
  Link as MuiLink,
} from "@mui/material";
import { Field, Form } from "react-final-form";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../actions/authActions";
import { connect } from "react-redux";
import { validateEmail, validatePassword } from "../../utils/validation";
import variables from "../../styles/sass/_variables.module.scss";
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

function Login(props) {
  // const classes = useStyles();
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = React.useState("password");

  const handleSubmit = async (values) => {
    try {
      props.dispatch(
        login(values, () => {
          navigate("/");
        })
      );
    } catch (e) {
      alert(e);
    }
  };

  const changePasswordVisibility = (e) => {
    setPasswordType(e.target.checked ? "text" : "password");
  };

  return (
    <div className="login-form-body">
      <div className="login-form">
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <form
              // className={classes.root}
              noValidate
              style={{ display: "flex", flexDirection: "column" }}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <h4
                className="text-primary"
                style={{ textAlign: "center", width: "100%" }}
              >
                Fashioncart Login
              </h4>
              <Field id ="email" name="email" validate={validateEmail}>
                {({ input, meta }) => (
                  <div className="input-field">
                    <TextField
                      {...input}
                      id="email-input"
                      label="Email"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ""}
                    />
                  </div>
                )}
              </Field>
              <Field
                name="password"
                validate={validatePassword}
                type={passwordType}
              >
                {({ input, meta }) => (
                  <div className="input-field">
                    <TextField
                      {...input}
                      id="password-input"
                      label="Password"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ""}
                    />
                  </div>
                )}
              </Field>
              <Field
                name="showPassword"
                type="checkbox"
                className="text-primary"
              >
                {({ input, meta }) => (
                  <div
                    style={{
                      display: "flex",
                      margin: "0px",
                      alignItems: "center",
                    }}
                  >
                    <Checkbox
                      {...input}
                      onChange={(e) => {
                        input.onChange(e);
                        changePasswordVisibility(e);
                      }}
                      id="outlined-basic"
                      variant="outlined"
                      type="checkbox"
                      color="#75bfae"
                    />
                    <div>Show Password</div>
                  </div>
                )}
              </Field>
              <Button
                variant="contained"
                style={{ backgroundColor: variables.primary, color: "white" }}
                className="w-100"
                type="submit"
              >
                Login
              </Button>
              <div>
                <Typography>Need an Account?</Typography>
                <MuiLink
                  to="/signup"
                  component={Link}
                  className="text-primary link"
                >
                  Sign Up
                </MuiLink>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default connect()(Login);

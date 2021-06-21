import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Checkbox,
  TextField,
  Button,
  Typography,
  Link as MuiLink,
} from "@material-ui/core";
import { Field, Form } from "react-final-form";
import { Link, useHistory } from "react-router-dom";
import "../../styles/form.css";
import { signup } from "../../actions/auth";
import { connect } from "react-redux";
import { validateEmail, validatePassword } from "../../utils/validation";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function SignUp(props) {
  const classes = useStyles();
  const history = useHistory();
  const [passwordType, setPasswordType] = React.useState("password");

  const validateUsername = (value) =>
    value && value.length >= 4 ? undefined : "Username is too Short";

  const handleSubmit = async (values) => {
    try {
      props.dispatch(
        signup(values, () => {
          history.push("/");
        })
      );
    } catch (e) {
      console.log("1..e", e);
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
              className={classes.root}
              noValidate
              style={{ display: "flex", flex: 1, flexDirection: "column" }}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <h4 style={{ textAlign: "center", flex: 1, width: "100%" }}>
                Ecom Sign Up
              </h4>
              <Field name="email" validate={validateEmail}>
                {({ input, meta }) => (
                  <div className="input-field">
                    <TextField
                      style={{ flex: 1 }}
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
              <Field name="name" validate={validateUsername}>
                {({ input, meta }) => (
                  <div className="input-field">
                    <TextField
                      {...input}
                      id="username-input"
                      label="Username"
                      name="name"
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
              <Field name="showPassword" type="checkbox">
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
                      color="primary"
                    />
                    <div>Show Password</div>
                  </div>
                )}
              </Field>
              <Button variant="contained" color="primary" type="submit">
                Sign Up
              </Button>
              <div>
                <Typography>Already have an Account?</Typography>
                <MuiLink to="/login" component={Link}>
                  Login
                </MuiLink>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default connect()(SignUp);

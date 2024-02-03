import React from 'react'
// import { makeStyles } from "@mui/styles/makeStyles";
import {
  Checkbox,
  TextField,
  Button,
  Typography,
  Link as MuiLink
} from '@mui/material'
import { Field, Form } from 'react-final-form'
import { Link, useNavigate } from 'react-router-dom'
import { signup } from '../../actions/authActions'
import { connect, useDispatch } from 'react-redux'
import { validateEmail, validatePassword } from '../../utils/validation'
import variables from '../../styles/sass/_variables.module.scss'
// const useStyles = makeStyles((theme) => ({
//   root: {
//     "& > *": {
//       margin: theme.spacing(1),
//       width: "25ch",
//     },
//   },
// }));

const SignUp = (props) => {
  // const classes = useStyles();
  const navigate = useNavigate()
  const [passwordType, setPasswordType] = React.useState('password')
  const dispatch = useDispatch()
  const validateUsername = (value) =>
    value && value.length >= 4 ? undefined : 'Username is too Short'

  const handleSubmit = async (values) => {
    try {
      dispatch(
        signup(values, () => {
          navigate('/')
        })
      )
    } catch (e) {
      alert(e)
    }
  }

  const changePasswordVisibility = (e) => {
    setPasswordType(e.target.checked ? 'text' : 'password')
  }

  return (
    <div className="login-form-body">
      <div className="login-form">
        <Form
          onSubmit={handleSubmit}
          render={({ handleSubmit }) => (
            <form
              // className={classes.root}
              noValidate
              style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}
              autoComplete="off"
              onSubmit={handleSubmit}
            >
              <h4
                style={{ textAlign: 'center', flex: 1, width: '100%' }}
                className="text-primary"
              >
                Fashionkart Sign Up
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
                      helperText={meta.touched ? meta.error : ''}
                    />
                  </div>
                )}
              </Field>
              <Field name="name" validate={validateUsername}>
                {({ input, meta }) => (
                  <div className="input-field">
                    <TextField
                      {...input}
                      style={{ flex: 1 }}
                      id="username-input"
                      label="Username"
                      name="name"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ''}
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
                      style={{ flex: 1 }}
                      id="password-input"
                      label="Password"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ''}
                    />
                  </div>
                )}
              </Field>
              <Field name="showPassword" type="checkbox">
                {({ input, meta }) => (
                  <div
                    style={{
                      display: 'flex',
                      margin: '0px',
                      alignItems: 'center'
                    }}
                  >
                    <Checkbox
                      {...input}
                      onChange={(e) => {
                        input.onChange(e)
                        changePasswordVisibility(e)
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
              <Button
                variant="contained"
                style={{ backgroundColor: variables.primary, color: 'white' }}
                type="submit"
                className="w-100"
              >
                Sign Up
              </Button>
              <div>
                <Typography>Already have an Account?</Typography>
                <MuiLink
                  to="/login"
                  component={Link}
                  className="text-primary link"
                >
                  Login
                </MuiLink>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  )
}

export default connect()(SignUp)

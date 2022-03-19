import React from "react";
import { connect } from "react-redux";
import { Field, Form } from "react-final-form";
import { useHistory } from "react-router-dom";
import { addAddress } from "../../actions/addressActions";
import { validateField } from "../../utils/validation";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

function AddressForm(props) {
  const classes = useStyles();
  const history = useHistory();

  const handleSubmit = async (values) => {
    try {
      props.dispatch(
        addAddress(values, () => {
          history.push("/order");
        })
      );
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div
      className="my-1 "
      style={{ flex: 1, display: "flex", justifyContent: "center" }}
    >
      <div className="login-form mx-6" style={{ width: "40%" }}>
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
              <h4
                className="text-primary my-6"
                style={{ textAlign: "center", width: "100%" }}
              >
                Address Form
              </h4>
              <Field name="address" validate={validateField}>
                {({ input, meta }) => (
                  <div className="input-field w-100">
                    <TextField
                      className=" w-100"
                      {...input}
                      id="address-input"
                      label="Address"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ""}
                    />
                  </div>
                )}
              </Field>
              <Field name="landmark" validate={validateField} type="text">
                {({ input, meta }) => (
                  <div className="input-field w-100">
                    <TextField
                      className=" w-100"
                      {...input}
                      id="landmark-input"
                      label="Landmark"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ""}
                    />
                  </div>
                )}
              </Field>
              <Field name="city" validate={validateField} type="text">
                {({ input, meta }) => (
                  <div className="input-field w-100">
                    <TextField
                      className=" w-100"
                      {...input}
                      id="city-input"
                      label="City"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ""}
                    />
                  </div>
                )}
              </Field>

              <Field name="state" validate={validateField} type="text">
                {({ input, meta }) => (
                  <div className="input-field w-100">
                    <TextField
                      className=" w-100"
                      {...input}
                      id="state-input"
                      label="State"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ""}
                    />
                  </div>
                )}
              </Field>
              <Field name="pincode" validate={validateField} type="text">
                {({ input, meta }) => (
                  <div className="input-field  w-100">
                    <TextField
                      className=" w-100"
                      {...input}
                      id="pincode-input"
                      label="Pin Code"
                      type="number"
                      variant="outlined"
                      error={meta.touched ? !!meta.error : false}
                      helperText={meta.touched ? meta.error : ""}
                    />
                  </div>
                )}
              </Field>
              <button
                variant="contained"
                className="btn btn-primary w-100"
                type="submit"
              >
                <span className="text-white ">Add Address</span>
              </button>
            </form>
          )}
        />
      </div>
    </div>
  );
}
export default connect()(AddressForm);

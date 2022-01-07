import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";

import * as Api from "../api/index";
import { login } from "../stores/auth";

interface FormValues {
  code: string;
  phoneNumber: string;
}
const useStyles = makeStyles(() => ({
  form: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
    gap: "1rem",
  },
  errorMessage: {
    textAlign: "center",
    color: "red",
    padding: "0rem 2rem",
  },
}));

const Form = () => {
  const [loginError, setLoginError] = useState("");
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const formValidation = Yup.object({
    code: Yup.number()
      .typeError("should be just number")
      .required("password is required"),
    phoneNumber: Yup.number()
      .typeError("should be number")
      .required("phone number is required"),
  });

  const SubmitForm = async (values: FormValues) => {
    try {
      const data = await Api.login(values);
      if (data.status && data.token) {
        localStorage.setItem("auth", data.token);
        dispatch(login());
        navigate("/home");
      } else {
        setLoginError(
          "Your PhoneNumber or Password is wrong. please try again"
        );
        LoginFormik.resetForm();
      }
    } catch (errors) {
      setLoginError("Your PhoneNumber or Password is wrong. please try again");
      LoginFormik.resetForm();
    }
  };

  const LoginFormik = useFormik({
    initialValues: {
      phoneNumber: "",
      code: "",
    },
    validationSchema: formValidation,
    onSubmit: SubmitForm,
  });

  return (
    <form className={classes.form} onSubmit={LoginFormik.handleSubmit}>
      <TextField
        variant="standard"
        fullWidth
        name="phoneNumber"
        value={LoginFormik.values.phoneNumber}
        onChange={LoginFormik.handleChange}
        onBlur={LoginFormik.handleBlur}
        disabled={LoginFormik.isSubmitting}
        label={
          LoginFormik.errors.phoneNumber
            ? LoginFormik.errors.phoneNumber
            : "Phone number"
        }
        error={!!LoginFormik.errors.phoneNumber}
      ></TextField>

      <TextField
        variant="standard"
        fullWidth
        name="code"
        value={LoginFormik.values.code}
        onChange={LoginFormik.handleChange}
        onBlur={LoginFormik.handleBlur}
        disabled={LoginFormik.isSubmitting}
        label={LoginFormik.errors.code ? LoginFormik.errors.code : "Password"}
        error={!!LoginFormik.errors.code}
      ></TextField>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        size="large"
        disabled={LoginFormik.isSubmitting}
      >
        Login
      </Button>
      <p className={classes.errorMessage}>{loginError}</p>
    </form>
  );
};

export default Form;

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { signinApi } from "../../redux/reducers/userReducer";
import { useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
        .required("Email ko đc bỏ trống !")
        .email("Email ko đúng định dạng"),
      password: Yup.string()
        .required("Password ko đc bỏ trống !")
        .min(3, "Password từ 3-12 kí tự")
        .max(12, "password từ 3-12 kí tự"),
      // .matches(/jimmy/, "password phải có jimmy"),
    }),
    onSubmit: (values) => {
      console.log(values);
      const action = signinApi(values);
      dispatch(action);
    },
  });

  return (
    <form className="container" onSubmit={formik.handleSubmit}>
      <h3>Login</h3>
      <div className="form-group">
        <p>Email</p>
        <input
          type="text"
          className="form-control"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email ? (
          <p className="text text-danger">{formik.errors.email}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password ? (
          <p className="text text-danger">{formik.errors.password}</p>
        ) : (
          ""
        )}
      </div>
      <div className="form-group">
        <button className="btn btn-success mt-2" type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

import { useFormik } from "formik";
import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSubmitAction } from "../../../redux/reducers/modalReducer";

export default function CreateUser() {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const dispatch = useDispatch();

  useEffect(() => {
    const action = setSubmitAction(formik.handleSubmit);
    dispatch(action);
  }, []);

  return (
    <form action="" className="container" onSubmit={formik.handleSubmit}>
      <div className="form-group">
        <p>User name</p>
        <input
          type="text"
          id="username"
          className="form-control"
          onChange={formik.handleChange}
        />
      </div>
      <div className="form-group">
        <p>Password</p>
        <input
          type="password"
          id="password"
          className="form-control"
          onChange={formik.handleChange}
        />
      </div>
      <div className="form-group">
        <button className="btn btn-success">Create user</button>
      </div>
    </form>
  );
}

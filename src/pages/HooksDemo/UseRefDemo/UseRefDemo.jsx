import React, { useRef } from "react";
import { useState } from "react";

// useRef : tương tự useState tuy nhiên khi thay dổi giá trị useRef component ko render lại ( useRef dùng để lưu giá trị sau mỗi lần render) , thường sử dụng cho các form ko có validation, hoặc load dữ liệu chỉnh sửa
export default function UseRefDemo(props) {
  const [number, setNumber] = useState(1);
  // const [userLogin, setUserLogin] = useState({ username: "", password: "" });

  // let userLogin = { username: "", password: "" };
  const userLoginRef = useRef({ username: "", password: "" });

  const handleChangeInput = (e) => {
    const { id, value } = e.target;
    userLoginRef.current[id] = value;
    // setUserLogin({
    //   ...userLogin,
    //   [id]: value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // chặn sự kiện reload browser
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h1>Number: {number}</h1>
      <button
        className="btn btn-success"
        onClick={() => {
          setNumber(number + 1);
        }}
      >
        +
      </button>
      <h3>Login</h3>
      <div className="form-group">
        <p>User name</p>
        <input
          type="text"
          className="form-control"
          id="username"
          onChange={handleChangeInput}
        />
      </div>{" "}
      <div className="form-group">
        <p>Password</p>
        <input
          type="password"
          className="form-control"
          id="password"
          onChange={handleChangeInput}
        />
      </div>{" "}
      <div className="form-group">
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </div>
    </form>
  );
}

import React, { useEffect, useState } from "react";
import useRoute from "../../hooks/useRoute";
import { useCookie } from "react-use";
import useCookieCustom from "../../hooks/useCookie";

export default function DemoUseRoute() {
  const {
    navigate,
    params,
    searchParams: [search, setSearch],
  } = useRoute();

  const [setCookie, getCookie] = useCookieCustom("luu cookie", "");

  console.log({ navigate, params, searchParams: [search, setSearch] });

  // sử dụng react-use github
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    deleteCookie();
  }, []);

  const updateCookieHandler = () => {
    updateCookie(`my-awesome-cookie-${counter}`);
    setCounter((c) => c + 1);
  };

  // save cookie by stackoverflow

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    setCookie(username, 10);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button onClick={deleteCookie}>Delete Cookie</button>

      <form className="container" onSubmit={handleSubmit}>
        <h3>Login cookie</h3>
        <div className="form-group">
          <p>Nhập vào username</p>
          <input type="text" id="username" className="form-control" />
        </div>
        <div className="form-group">
          <p>Nhập vào password</p>
          <input type="password" id="password" className="form-control" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

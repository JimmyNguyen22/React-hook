import React from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import {
  ACCESS_TOKEN,
  clearCookie,
  clearLocalStorage,
  USER_LOGIN,
} from "../../util/config";

export default function HeaderHome(props) {
  const navigate = useNavigate();
  const { userLogin } = useSelector((state) => state.userReducer);
  const renderNavLink = () => {
    if (userLogin) {
      return (
        <>
          {" "}
          <li>
            <NavLink className="nav-link" to="/profile">
              Hello ! {userLogin.email}
            </NavLink>
          </li>
          <li>
            <span
              className="nav-link"
              style={{ cursor: "pointer" }}
              onClick={() => {
                clearLocalStorage(USER_LOGIN);
                clearLocalStorage(ACCESS_TOKEN);
                clearCookie(ACCESS_TOKEN);
                // f5 lại trang
                // window.location.reload();
                window.location.href = "/"; // clear luôn redux
                // khaido@gmail.com
              }}
            >
              Đăng xuất
            </span>
          </li>
        </>
      );
    }
    return (
      <li>
        <NavLink className="nav-link" to="/login">
          Login
        </NavLink>
      </li>
    );
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">
        React Hook
      </NavLink>
      <button
        className="navbar-toggler d-lg-none"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapsibleNavId"
        aria-controls="collapsibleNavId"
        aria-expanded="false"
        aria-label="Toggle navigation"
      />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/search">
              Search
            </NavLink>
          </li>
          {renderNavLink()}
          <li className="nav-item">
            <NavLink className="nav-link" to="/demohoc">
              Demo HOC
            </NavLink>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Hooks
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/usestate">
                UseStateDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/useeffect">
                UseEffectDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/usecallback">
                UseCallBackDemo
              </NavLink>
              <NavLink className="dropdown-item" to="/usememo">
                Use Memo
              </NavLink>
              <NavLink className="dropdown-item" to="/useref">
                Use Ref
              </NavLink>
              <NavLink className="dropdown-item" to="/customhook">
                customHook(useRoute)
              </NavLink>
              <NavLink className="dropdown-item" to="/demoanimation">
                animation
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Redux Hooks
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/reduxnumber">
                DemoNumber
              </NavLink>
              <NavLink className="dropdown-item" to="/reduxfacebook">
                Demo Facebook
              </NavLink>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="dropdownId"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Router Hooks
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownId">
              <NavLink className="dropdown-item" to="/reactform">
                Demo navigate
              </NavLink>
            </div>
          </li>
        </ul>
        <form
          className="d-flex my-2 my-lg-0"
          onSubmit={(e) => {
            e.preventDefault();
            const keyword = document.querySelector("#keyword").value;

            navigate(`/search?keyword=${keyword}`);
          }}
        >
          <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
            id="keyword"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// cấu hình browser router
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import UseStateDemo from "./pages/HooksDemo/UseStateDemo/UseStateDemo";
import UseEffectDemo from "./pages/HooksDemo/UseEffectDemo/UseEffectDemo";
import UseCallBackDemo from "./pages/HooksDemo/UseCallBackDemo/UseCallBackDemo";
import UseMemoDemo from "./pages/HooksDemo/UseMemoDemo/UseMemoDemo";
import UseRefDemo from "./pages/HooksDemo/UseRefDemo/UseRefDemo";
// setup redux
import { Provider } from "react-redux";
import { store } from "./redux/configStore";
import DemoNumber from "./pages/HooksDemo/UseRedux/DemoNumber/DemoNumber";
import { DemoFacebookApp } from "./pages/HooksDemo/UseRedux/DemoFacebookApp/DemoFacebookApp";
import ReactForm from "./pages/HookRoutes/ReactForm/ReactForm";
import Profile from "./pages/HookRoutes/ReactForm/Profile";
import Home from "./pages/Home/Home";
import Detail from "./pages/Detail/Detail";
import Search from "./pages/Search/Search";
import DemoUseRoute from "./pages/DemoUseRoute/DemoUseRoute";
import DemoAnimation from "./pages/DemoAnimation/DemoAnimation";
import Login from "./pages/Login/Login";

// tạo 1 biến để quản lý chuyển hướng trang
import { createBrowserHistory } from "history";
import { unstable_HistoryRouter as HistoryRouter } from "react-router-dom";
import DemoHoc from "./pages/DemoHoc/DemoHoc";
import AdminTemplates from "./templates/AdminTemplates";
import UserManagement from "./pages/Admin/UserManagement/UserManagement";
import ProductManagement from "./pages/Admin/ProductManagement/ProductManagement";

export const history = createBrowserHistory();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HistoryRouter history={history}>
      <Routes>
        <Route path="" element={<App></App>}>
          <Route index element={<Home></Home>}></Route>
          <Route path="detail">
            <Route path=":id" element={<Detail></Detail>}></Route>
          </Route>
          <Route
            path="usestate"
            element={<UseStateDemo></UseStateDemo>}
          ></Route>
          <Route
            path="useeffect"
            element={<UseEffectDemo></UseEffectDemo>}
          ></Route>
          <Route
            path="usecallback"
            element={<UseCallBackDemo></UseCallBackDemo>}
          ></Route>
          <Route path="usememo" element={<UseMemoDemo></UseMemoDemo>}></Route>
          <Route path="useref" element={<UseRefDemo></UseRefDemo>}></Route>
          <Route path="reduxnumber" element={<DemoNumber></DemoNumber>}></Route>
          <Route
            path="reduxfacebook"
            element={<DemoFacebookApp></DemoFacebookApp>}
          ></Route>
          <Route path="reactform" element={<ReactForm></ReactForm>}></Route>
          <Route path="profile" element={<Profile></Profile>}></Route>
          <Route path="search" element={<Search></Search>}></Route>
          <Route
            path="customhook"
            element={<DemoUseRoute></DemoUseRoute>}
          ></Route>
          <Route
            path="demoanimation"
            element={<DemoAnimation></DemoAnimation>}
          ></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="demohoc" element={<DemoHoc></DemoHoc>}></Route>

          <Route path="*" element={<Navigate to={"/"}></Navigate>}></Route>
        </Route>

        <Route
          path="admin/users"
          element={<AdminTemplates component={UserManagement}></AdminTemplates>}
        ></Route>
        <Route
          path="admin/products"
          element={
            <AdminTemplates component={ProductManagement}></AdminTemplates>
          }
        ></Route>
      </Routes>
    </HistoryRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

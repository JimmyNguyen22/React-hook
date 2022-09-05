import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
// cấu hình browser router
import { BrowserRouter, Route, Routes } from "react-router-dom";
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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="" element={<App></App>}>
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
        </Route>
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

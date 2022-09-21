import React from "react";
import HocModal from "../../HOC/HocModal";
import ModalHoc from "../../HOC/ModalHoc";
import UseStateDemo from "../HooksDemo/UseStateDemo/UseStateDemo";
import Login from "../Login/Login";

// tạo ra component từ hoc
let WrapFormLoginModal = ModalHoc(Login, "Login");
let WrapUseStateDemoModal = ModalHoc(UseStateDemo, "UseState");

export default function DemoHoc() {
  return (
    <div>
      {/* <WrapFormLoginModal></WrapFormLoginModal>
      <WrapUseStateDemoModal> </WrapUseStateDemoModal> */}

      <HocModal
        Component={Login}
        id={"modal1"}
        title={<h1 className="text-danger">Login</h1>}
      ></HocModal>
      <HocModal
        Component={UseStateDemo}
        id={"modal2"}
        title={<h1 className="text-danger">UseState Demo</h1>}
      ></HocModal>
    </div>
  );
}

// hoc đc dùng ở phía giao diện, phía logic có customHook

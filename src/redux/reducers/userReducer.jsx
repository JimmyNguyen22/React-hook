import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { history } from "../../index";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJSON,
  http,
  setCookie,
  setStore,
  setStoreJSON,
  USER_LOGIN,
} from "../../util/config";

const initialState = {
  userLogin: getStoreJSON(USER_LOGIN),
};

const userReducer = createSlice({
  name: "userReducer",
  initialState,
  reducers: {
    setUserLoginAction: (state, action) => {
      let userLogin = action.payload;
      state.userLogin = userLogin;
    },
  },
});

export const { setUserLoginAction } = userReducer.actions;

export default userReducer.reducer;

// action api ( thunk)

export const signinApi = (userLogin) => {
  return async (dispatch) => {
    try {
      let result = await http.post("Users/signin", userLogin);

      // thành công
      // lưu lại token
      setStore(ACCESS_TOKEN, result.data.content.accessToken);
      setCookie(result.data.content.accessToken, 30, ACCESS_TOKEN);

      // lưu email
      setStoreJSON(USER_LOGIN, result.data.content);

      // console.log(result);

      // đừa lên user reducer
      const action = setUserLoginAction(result.data.content);

      dispatch(action);

      history.push("/profile");
    } catch (err) {
      console.log({ err });
      alert("Tài khoản mk ko đúng !");
      history.push("/login");
    }
  };
};

// call api getProfile
export const getProfileApi = () => {
  return async (dispatch) => {
    try {
      let result = await http.post("/users/getprofile");
      console.log("ket qua", result.data.content);
      // tạo ra actionCreator => dispatch lên redux
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
    } catch (e) {
      alert("đăng nhập để vào trang");
      history.push("/login");
      console.log(e);
    }
  };
};

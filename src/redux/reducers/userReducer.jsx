import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import {
  ACCESS_TOKEN,
  getStore,
  getStoreJSON,
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
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/signin",
        method: "POST",
        data: userLogin,
      });
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
    } catch (err) {
      console.log({ err });
    }
  };
};

// call api getProfile
export const getProfileApi = () => {
  return async (dispatch) => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/Users/getProfile",
        method: "POST",
        headers: {
          Authorization: `Bearer ${getStore(ACCESS_TOKEN)}`,
        },
      });
      console.log("ket qua", result.data.content);
      // tạo ra actionCreator => dispatch lên redux
      const action = setUserLoginAction(result.data.content);
      dispatch(action);
    } catch (e) {
      console.log(e);
    }
  };
};

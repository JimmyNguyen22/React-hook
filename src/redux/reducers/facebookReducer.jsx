// rxslice
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  arrComment: [
    { name: "Jimmy", content: "asdfd" },
    { name: "Michael", content: "saxxcd" },
  ],
};

const facebookReducer = createSlice({
  name: "facebookReducer",
  initialState,
  reducers: {
    addComment: (state, action) => {
      // b1 : lấy dữ liệu từ payload
      let userComment = action.payload;
      // b2 : cập nhật state
      state.arrComment.push(userComment);
    },
  },
});

export const { addComment } = facebookReducer.actions;

export default facebookReducer.reducer;

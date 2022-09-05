import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { changeNumber } from "../../../../redux/reducers/numberReducer";

export default function DemoNumber(props) {
  const { number } = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h3>Number: {number}</h3>
      <button
        className="btn btn-success"
        onClick={() => {
          // cách 1: tự tạo action dể dispatch reducer slice
          // const action = {
          //   type: "numberReducer/changeNumber",
          //   payload: number + 1,
          // };
          // cách 2 : action creator
          const action = changeNumber(number + 1);
          dispatch(action);
        }}
      >
        +
      </button>
    </div>
  );
}

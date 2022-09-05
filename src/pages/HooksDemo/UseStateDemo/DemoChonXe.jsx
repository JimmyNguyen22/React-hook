import React from "react";
import { useState } from "react";

export default function DemoChonXe() {
  const [img, setImg] = useState("./img/red-car.jpg");
  const handleChange = (car) => {
    setImg(`./img/${car}-car.jpg`);
  };

  return (
    <div>
      <h3>Demo chọn xe</h3>
      <div className="row">
        <div className="col-6">
          <img src={img} alt="car" className="w-100" />
        </div>
        <div className="col-6">
          <button
            className="btn mx-2"
            style={{ background: "red", color: "#fff" }}
            onClick={() => {
              handleChange("red");
            }}
          >
            Red
          </button>{" "}
          <button
            className="btn mx-2"
            style={{ background: "silver", color: "#fff" }}
            onClick={() => {
              handleChange("silver");
            }}
          >
            Silver
          </button>{" "}
          <button
            className="btn mx-2"
            style={{ background: "black", color: "#fff" }}
            onClick={() => {
              handleChange("black");
            }}
          >
            Black
          </button>{" "}
          <button
            className="btn mx-2"
            style={{ background: "#eee", color: "#fff" }}
            onClick={() => {
              handleChange("steel");
            }}
          >
            Steel
          </button>
        </div>
      </div>
    </div>
  );
}

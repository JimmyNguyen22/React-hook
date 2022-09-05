import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

let timeout = {};

export default function UseEffectDemo() {
  const [arrProduct, setArrProduct] = useState([]);
  const [count, setCount] = useState(60);

  const getApi = () => {
    let promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    promise.then((result) => {
      setArrProduct(result.data.content);
    });
    promise.catch((err) => {
      console.log({ err });
    });
  };

  const renderProduct = () => {
    return arrProduct.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <img src={item.image} alt="product" className="w-100" />
          <div className="card-body">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      );
    });
  };

  useEffect(() => {
    // Callback function này sẽ chạy 1 lần đầu tiên và các lần sau thì phụ thuộc vào dependency thứ 2 của hàm  useEffect (giống didUpdate)
    // khi nào count thay đổi thì mới chạy hàm callback này tiêp ,còn state khác thay đổi thì hàm này ko chạy
  }, [count]);

  useEffect(() => {
    // Chạy 1 lần sau khi render( giống componentDidMount của class component)
    getApi();

    timeout = setInterval(() => {
      setCount((count) => {
        return count + 1;
      });
    }, 1000);

    return () => {
      // function return trong useEffect sẽ đc kích hoạt trước khi component này mất khỏi giao diện giống  componentWillUnMount
      clearInterval(timeout);
    };
  }, []);

  return (
    <div className="container">
      <h4>ComponentWillUnMount</h4>
      <p>Count: {count}</p>
      <h3>UseEffectDemo</h3>
      <h4>ComponentDidMount ( sử dụng cho việc load 1 lần sau render)</h4>
      <hr />
      <h3>Shoes shop</h3>
      <div className="row">{renderProduct()}</div>
    </div>
  );
}

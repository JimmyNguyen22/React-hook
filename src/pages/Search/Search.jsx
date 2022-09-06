import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

let timeout = null;

export default function Search() {
  const [arrProduct, setArrProduct] = useState([]);

  // Đưa dữ liệu lên url: setSearchParams
  // Lấy dữ liệu từ url về: searchParams.get("tên params")
  const [searchParams, setSearchParams] = useSearchParams();

  const handleChange = (e) => {
    // b4: khi user  gõ trên search thì lấy ra giá trị value gán vào url
    const { value } = e.target;
    // Khi người dùng gõ phím thì setSearchParams thực thi => Dẫn đến function đc render lại để kích useEffect chạy
    setSearchParams({
      // làm thay đổi ?keyword trên url đồng thời kích useEffect chạy lần 2
      keyword: value,
    });
  };

  const getProductByKeywordApi = async () => {
    // Call api ( b1 => kích lần 1) => ( lần 2 b2 -> gọi api sau lần đầu tiên load trang)
    try {
      if (searchParams.get("keyword") !== null) {
        const result = await axios({
          url: `https://shop.cyberlearn.vn/api/product?keyword=${searchParams.get(
            "keyword"
          )}`,
          method: "GET",
        });
        setArrProduct(result.data.content); // b3: Sau khi lấy api thành công về -> state thay đổi  -> giao diện render lại ( kết thúc lần 1)
        // lần 2 ( b6)
        console.log(result.data.content);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // gọi api thực thi
    getProductByKeywordApi();
  };

  useEffect(() => {
    // lần 1 ( b1: khi load trang thì hàm này gọi api 1 lần)
    // gọi api thực thi

    timeout = setTimeout(() => {
      // vừa search vừa gọi

      getProductByKeywordApi();
    }, 1000);

    return () => {
      if (timeout !== null) {
        // kq clear sau khi gọi api
        clearTimeout(timeout); // b7
      }
    };
  }, [searchParams.get("keyword")]); // Khi params trên url thay đổi thì hàm này kích hoạt

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keyword"
            onChange={handleChange}
          />
          <button className="btn bg-dark text-white">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={"..."} />
                </div>
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-success">View detail</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}

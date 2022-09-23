import React from "react";

export default function CreateProduct() {
  return (
    <form>
      <div className="form-group">
        <p>Id</p>
        <input type="text" name="id" id="id" className="form-control" />
      </div>
      <div className="form-group">
        <p>Name</p>
        <input type="text" name="name" id="name" className="form-control" />
      </div>
      <div className="form-group">
        <p>Price</p>
        <input type="text" name="price" id="price" className="form-control" />
      </div>
      <button className="btn btn-success">Create</button>
    </form>
  );
}

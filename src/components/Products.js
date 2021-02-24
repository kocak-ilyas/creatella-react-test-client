import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const Products = () => {
  const products = useSelector((state) => state.productsReducer);
  console.log(products);
  return (
    <div className="container mt-5">
      <div className="row">
        {products.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card p-3">
              <div className="d-flex flex-row mb-3">
                <img
                  src="https://i.imgur.com/ccMhxvC.png"
                  alt="img"
                  width="70"
                />
                <div className="d-flex flex-column ml-2">
                  <span>Size: &nbsp; {item.size} </span>
                  <span className="text-black-50">{item.price} &nbsp; $ </span>
                  <span className="ratings">
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                    <i className="fa fa-star"></i>
                  </span>
                </div>
              </div>
              <h6>{item.face}</h6>
              <div className="d-flex justify-content-between install mt-3">
                <span>{item.date}</span>
                <span className="text-primary">
                  Add to Cart&nbsp;
                  <i className="fa fa-angle-right"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

/* eslint-disable react/style-prop-object */
import React from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const Products = () => {
  const products = useSelector((state) => state.productsReducer);
  return (
    <div className="container mt-5">
      <button className="btn btn-primary" type="button" disabled>
        <span
          className="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        &nbsp; &nbsp; Loading...
      </button>
      <div className="row">
        {products.map((item) => (
          <div className="col-md-4" key={item.id}>
            <div className="card p-3">
              <div className="d-flex flex-row mb-3">
                <button
                  style={{ fontSize: item.size }}
                  className="facebtn center-block btn-material btn-material-default"
                >
                  {item.face}
                </button>
                <p></p>
                <div className="d-flex flex-column ml-2">
                  <span>Size: &nbsp; {item.size} </span>
                  <span>Id: &nbsp; {item.id} </span>
                  <span className="text-black-50">
                    $&nbsp;
                    {(item.price * 0.01)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                  </span>
                  {/* <span className="text-black-50">{item.price} &nbsp; $ </span> */}
                </div>
              </div>
              <div className="d-flex justify-content-between install mt-3">
                <span>{item.date}</span>
                <span className="text-primary">
                  Add to Cart &nbsp;
                  <i className="fa fa-angle-right"></i>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-light bg-dark">~ end of catalogue ~</p>{" "}
    </div>
  );
};

export default Products;

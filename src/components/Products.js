import React from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";
import ProductConstructorDate from "./ProductConstructorDate";
import "./styles.css";

const Products = () => {
  const products = useSelector((state) => state.productsReducer);
  return (
    <div className="container mt-5">
      {products.isLoading ? (
        <Loading />
      ) : (
        <div className="row">
          {products.productsTable.map((product) => (
            <div className="col-md-4" key={product.id}>
              <div className="card p-3">
                <div className="d-flex flex-row mb-3">
                  <button
                    style={{ fontSize: product.size }}
                    className="facebtn center-block btn-material btn-material-default"
                  >
                    {product.face}
                  </button>
                  <p></p>
                  <div className="d-flex flex-column ml-2"></div>
                </div>
                <div className="d-flex justify-content-between install mt-3">
                  <span>
                    $&nbsp;
                    {(product.price * 0.01)
                      .toFixed(2)
                      .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}{" "}
                  </span>
                  <span className="text-black-50">
                    Size: &nbsp; {product.size}{" "}
                  </span>
                  <span>
                    <ProductConstructorDate dateOfProduct={product.date} />
                  </span>
                  <span className="text-primary">
                    Add to Cart &nbsp;
                    <i className="fa fa-angle-right"></i>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Products;

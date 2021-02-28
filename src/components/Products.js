/* eslint-disable react/style-prop-object */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./styles.css";

const Products = () => {
  const products = useSelector((state) => state.productsReducer);

  const now = new Date("02/21/2021 05:40").getTime();
  console.log("now", now);
  console.log(products);

  const [productGetTime, setProductGetTime] = useState(0);
  const [distanceTime, setDistanceTime] = useState(0);
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
                </div>
              </div>
              <div className="d-flex justify-content-between install mt-3">
                {/* {setDistanceTime(now - 1)} */}
                {console.log("distanceTime", distanceTime)}
                {/* {setProductGetTime(new Date(
                  `${item.date.slice(4, 7)}/${item.date.slice(8,10)}/${item.date.slice(11, 15)} ${item.date.slice(16,18)}:${item.date.slice(19, 21)}`
                  ))} */}

                {/* <div>
                  {fark < dakika ? (
                    <p>Now </p>
                  ) : fark < saat ? (
                    <p>{minute} minute ago</p>
                  ) : fark < gun ? (
                    <p>{hour} hour ago</p>
                  ) : fark < hafta ? (
                    <p>{day} day ago</p>
                  ) : (
                    <p>{hedef.toJSON().slice(0, 10).replace(/-/g, "/")}</p>
                  )}
                </div> */}

                {/* {setProductTime({
                  productMonth: item.date.slice(4, 7),
                  productDay: item.date.slice(8, 10),
                  productYear: item.date.slice(11, 15),
                  productHour: item.date.slice(16, 18),
                  productMinute: item.date.slice(19, 21),
                })} */}

                <span>
                  {item.date}

                  {/* {console.log(item.date)}
                  {console.log("ay ismi", item.date.slice(4, 7))}
                  {console.log("gün ismi", item.date.slice(8, 10))}
                  {console.log("yıl ismi", item.date.slice(11, 15))}
                  {console.log("saat ismi", item.date.slice(16, 18))}
                  {console.log("dakika ismi", item.date.slice(19, 21))}
                  {console.log("saniye ismi", item.date.slice(22, 24))} */}
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
      <p className="text-center text-light bg-dark">~ end of catalogue ~</p>{" "}
    </div>
  );
};

export default Products;

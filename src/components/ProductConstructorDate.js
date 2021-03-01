import React from "react";
const nowDate = new Date().getTime();

const ProductConstructorDate = (product) => {
  const distanceTime = nowDate - new Date(product.dateOfProduct).getTime();

  const day = Math.floor(distanceTime / (24 * 60 * 60 * 1000));
  const hour = Math.floor(distanceTime / (60 * 60 * 1000));
  const minute = Math.floor(distanceTime / (60 * 1000));

  return (
    <div>
      {distanceTime < 60 * 1000 ? (
        <p>Now </p>
      ) : distanceTime < 60 * 60 * 1000 ? (
        <p>{minute} minute ago</p>
      ) : distanceTime < 24 * 60 * 60 * 1000 ? (
        <p>{hour} hour ago</p>
      ) : distanceTime < 7 * 24 * 60 * 60 * 1000 ? (
        <p>{day} day ago</p>
      ) : (
        <p>{product.dateOfProduct.slice(4, 15)}</p>
      )}
    </div>
  );
};

export default ProductConstructorDate;

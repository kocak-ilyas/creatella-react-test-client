import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const scrolledPage = useSelector(
    (state) => state.productsReducer.scrolledPage
  );

  return (
    <div>
      {scrolledPage > 30 ? (
        <p className="text-center text-light bg-dark">~ end of catalogue ~</p>
      ) : null}
    </div>
  );
};

export default Footer;

import React from "react";
import { getEndOfPage } from "../redux/actions";
import { useSelector, useDispatch } from "react-redux";

const Footer = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.productsReducer);

  window.addEventListener("scroll", () => {
    const scrollable =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (!products.reachedEndOfProducts && Math.ceil(scrolled) === scrollable) {
      dispatch(getEndOfPage());
    }
  });
  return (
    <div>
      {products.reachedEndOfProducts ? (
        <p className="text-center text-light bg-dark">~ end of catalogue ~</p>
      ) : null}
    </div>
  );
};

export default Footer;

// let lastKnownScrollPosition = 0;
// let ticking = false;

// function doSomething(scrollPos) {
//   // Do something with the scroll position
// }

// document.addEventListener("scroll", function (e) {
//   console.log("scrolled!!!");
// lastKnownScrollPosition = window.scrollY;

// if (!ticking) {
//   window.requestAnimationFrame(function () {
//     doSomething(lastKnownScrollPosition);
//     ticking = false;
//   });

//   ticking = true;
// }
// });

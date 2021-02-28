import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProducts } from "./redux/actions";
import "./App.css";
import Products from "./components/Products";
import SortNav from "./components/SortNav";
import Advertisements from "./components/Advertisements";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
 
  return (
    <div className="App">
      <Advertisements />
      <hr />
      <SortNav />
      <Products />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "alertifyjs/build/css/alertify.min.css";
import App from "./App";
import configureStore from "./redux/reducers/configureStore";
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    {/* <BrowserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// import reportWebVitals from './reportWebVitals';

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();

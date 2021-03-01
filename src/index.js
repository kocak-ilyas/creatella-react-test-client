import React from 'react';
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./redux/reducers/configureStore";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { createStore } from "redux";
// import thunk from "redux-thunk";
import rootReducer from "./Reducers";
import { Provider } from "react-redux";

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

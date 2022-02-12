import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import  userReducer   from "./features/user";
import themeReducer from "./features/theme";

const store = configureStore({
  //reducer is a function takes some information about the state like
  // Takes previous value of the state,actions performed on the state and return the new state
  reducer: {
    user:userReducer,
    theme:themeReducer
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

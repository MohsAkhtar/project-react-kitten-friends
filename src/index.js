import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
import { createStore } from "redux";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchKittens } from "./reducers";

// Usually use rootReducer but we only have one reducer so far in app
// we use the store to store all state and pass it down as a prop
const store = createStore(searchKittens);

// Provider component passes down store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

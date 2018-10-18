import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import "./index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";
import { searchKittens, requestKittens } from "./reducers";

const logger = createLogger();

const rootReducer = combineReducers({ searchKittens, requestKittens });

// we use the store to store all state and pass it down as a prop
const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware, logger)
);

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

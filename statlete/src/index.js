import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import App from "./pages/app";
import * as serviceWorker from "./serviceWorker";
import rootReducer from "./state/reducers";
import "./styles/index.scss";

// define middlewares
const middlewares = [reduxThunk];
const middlewareEnhancer = applyMiddleware(...middlewares);

// define enhancers
const enhancers = [middlewareEnhancer];
const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const composedEnhancers = composedEnhancer(...enhancers);

// create store
const store = createStore(rootReducer, composedEnhancers);


document.addEventListener("DOMContentLoaded", () => { 
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

// If you want the app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some additional setup.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

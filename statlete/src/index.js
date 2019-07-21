import React from "react";
import ReactDOM from "react-dom";
import App from "./pages/app";
import * as serviceWorker from "./serviceWorker";
import "./styles/index.scss";

ReactDOM.render(<App />, document.getElementById("root"));

// If you want the app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some additional setup.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

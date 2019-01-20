import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";

import promiseFinally from "promise.prototype.finally";

import { useStrict } from "mobx";
import { Provider } from "mobx-react";

// import { HashRouter } from "react-router-dom";
import { startRouter } from "mobx-router";
import views from "./config/views";
import stores from "./stores";

import App from "./components/App";

// For easier debugging
// window._____APP_STATE_____ = stores;

startRouter(views, stores);
promiseFinally.shim();
useStrict(true);

ReactDOM.render(
  <Provider {...stores} store={stores}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();

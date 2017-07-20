import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import WebFont from "webfontloader";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

WebFont.load({
  google: {
    families: ["Oswald", "sans-serif"]
  }
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();

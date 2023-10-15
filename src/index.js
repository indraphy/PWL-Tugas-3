import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { MessageProvider } from "./MessageContext";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <MessageProvider>
    <App />
  </MessageProvider>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/antd.css";
import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/patients", () => {
      return [
        {
          key: "1",
          name: "André Luiz da Silva",
          age: 34,
          address: "Rua Padre Petrus Dingenouts",
          tags: ["nice", "developer"],
        },
      ];
    });
  },
});

ReactDOM.render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

ReactDOM.createRoot(document.querySelector(".heroes-gallery")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

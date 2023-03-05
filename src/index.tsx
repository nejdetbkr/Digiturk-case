import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import Layout from "./components/layout";
import App from "./App";
import ScrollToTop from "./utils/scrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <App />
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);

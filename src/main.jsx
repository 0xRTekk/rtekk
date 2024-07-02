import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";
import { Renovation } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/rtekk">
      <Routes>
        <Route path="/home" element={<App />}/>
        <Route path="/" element={<Renovation />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

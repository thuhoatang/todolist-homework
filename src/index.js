import React from "react";
import ReactDOM from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import App from "./App";
import DetailItem from "./Components/DetailItem";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
  
    <App/>
    
    </BrowserRouter>
  </React.StrictMode>,

  document.getElementById("root")
);

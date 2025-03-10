import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import toast, { Toaster } from 'react-hot-toast';
import "./config/firebase-config"
import Sos from "./components/sos";
import Navbar from "./components/navbar";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
  <Toaster />
  <Navbar/>
  <Sos/>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

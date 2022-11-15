import React from 'react'
import './index.css';
import './App'
import App from './App';
import { render } from "react-dom";
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

render(
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root")
  );
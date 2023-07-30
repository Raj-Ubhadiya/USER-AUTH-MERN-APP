import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
// import "./App.css";

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registerform" exact element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

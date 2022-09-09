import React from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="card-container">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="about" element={<h1>ABOUT PAGE</h1>} />
      </Routes>
    </div>
  );
}

export default App;

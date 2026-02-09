import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Single from "./Single";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/single" element={<Single />} />
    </Routes>
  );
}

export default App;

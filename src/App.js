import React from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Bongo24 from "./pages/Bongo24";
import FullyBooked25 from "./pages/FullyBooked25";
import RFantasy from "./pages/RFantasy";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <HashRouter>
    <Routes>
        <Route index element={<Home />} />
        <Route path="fullybooked25" element={<FullyBooked25 />} />
        <Route path="bongo24" element={<Bongo24 />} />
        <Route path="rfantasy" element={<RFantasy />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
  </HashRouter>
  )
}

export default App;

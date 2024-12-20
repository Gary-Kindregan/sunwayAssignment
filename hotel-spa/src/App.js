import React from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import HotelList from "./components/HotelList";
import HotelDetail from "./components/HotelDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<HotelList />} />
        <Route path="/hotels/:id" element={<HotelDetail />} />
      </Routes>
    </div>
  );
}

export default App;

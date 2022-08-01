import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Index from "../Dashboard/Index";
import HomePage from "../Home/HomePage";
import Login from "../Login";
import Register from "../Register";
function AllRoutes() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Index />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoutes;

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllCards from "../Dashboard/AllCards";
import CreatingCard from "../Dashboard/CreatingCard";

import Index from "../Dashboard/Index";
import UpdatingCard from "../Dashboard/UpdatingCard";
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
          <Route path="/view-all-cards" element={<AllCards />} />
          <Route path="/create-card" element={<CreatingCard />} />
          <Route path="/update-card" element={<UpdatingCard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default AllRoutes;

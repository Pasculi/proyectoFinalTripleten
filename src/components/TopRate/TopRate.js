import React from "react";
import "./TopRate.css";
import DetailsMovie from "../DetailsMovie/DetailsMovie";
import { Route, Routes } from "react-router-dom";

const TopRate = () => {
  return (
    <>
      <Routes>
        <Route path=":id" element={<DetailsMovie />} />
      </Routes>
      <div className="top-rate">
        <h1>Top - Rate</h1>
      </div>
    </>
  );
};

export default TopRate;

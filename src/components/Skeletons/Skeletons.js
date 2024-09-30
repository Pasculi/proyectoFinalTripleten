import React from "react";
import "./Skeletons.css";
import { Skeleton } from "@mui/material";

const Skeletons = () => {
  return (
    <>
      <div className="skeleton">
        <Skeleton width={250} height={375} color='grey' highlight='black'/>
        <Skeleton width={230} height={30} />
        <Skeleton width={120} height={24} />
      </div>
    </>
  );
};

export default Skeletons;

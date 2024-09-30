import React from "react";
import "./Skeletons.css";
import { Card, Skeleton } from "@mui/material";

const Skeletons = () => {
  return (
    <>
      <Card sx={{ maxWidth: 250, m: 2 }}>
        <Skeleton
          sx={{ m: 2 }}
          variant="rectangular"
          width={218}
          height={346}
        />
        <Skeleton sx={{ m: 2 }} variant="rectangular" width={218} height={24} />
        <Skeleton sx={{ m: 2 }} variant="rectangular" width={218} height={36} />
      </Card>
      {/*  */}
      {/* <Skeleton
          className="skeleton-image"
          animation="wave"
          width={230}
          height={475}
          color="grey"
          highlight="black"
        />
        <Skeleton animation="wave" width={230} height={30} />
        <Skeleton animation="wave" width={120} height={50} />
      </div> */}
    </>
  );
};

export default Skeletons;

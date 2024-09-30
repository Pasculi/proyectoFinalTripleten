import React from "react";
import "./Skeletons.css";
import { Card, createTheme, Skeleton, ThemeProvider } from "@mui/material";

const Skeletons = () => {

  const theme = createTheme({
    palette: {
      background: {
        skeletor: "#a0aecd",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={theme}>
        <Card sx={{ maxWidth: 250, m: 2 }}>
          <Skeleton
            sx={{ m: 2, bgcolor: "background.skeletor" }}
            animation="pulse"
            variant="rectangular"
            color="grey"
            highlight="black"
            width={218}
            height={346}
          />
          <Skeleton
            sx={{ m: 2, bgcolor: "background.skeletor" }}
            variant="rectangular"
            width={218}
            height={24}
          />
          <Skeleton
            sx={{ m: 2, bgcolor: "background.skeletor" }}
            variant="rectangular"
            width={218}
            height={36}
          />
        </Card>
      </ThemeProvider>
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

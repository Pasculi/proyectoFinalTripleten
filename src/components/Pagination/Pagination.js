import React from "react";
import "./Pagination.css";
import { HashLink as Anchor } from "react-router-hash-link";
import { Button } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import ForwardIcon from '@mui/icons-material/Forward';

const Pagination = ({ mostrarMas, limitMovies, chargePage }) => {
  console.log(limitMovies);
 
  return (
    <>
      <nav className="pagination">
        <div selector="btn-mas">
          {limitMovies === 21 ? (
            <Anchor smooth to="#header-start">
              <Button variant="contained" endIcon={<FileUploadIcon />}>
                ir arriba
              </Button>
            </Anchor>
          ) : (
            <>
              <Anchor smooth to="#footer-id">
                <Button
                  variant="contained"
                  onClick={mostrarMas}
                  endIcon={<ForwardIcon />}
                >
                  Ver mas...
                </Button>
              </Anchor>
            </>
          )}
        </div>
        <Button
          variant="contained"
          onClick={chargePage}
          endIcon={<ForwardIcon />}
        >
          Next page
        </Button>
      </nav>
    </>
  );
};

export default Pagination;

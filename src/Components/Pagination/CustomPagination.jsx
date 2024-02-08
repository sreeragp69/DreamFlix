import React from "react";
import Pagination from "@mui/material/Pagination";
import { ThemeProvider, createTheme } from "@mui/material";


//Theme 
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function CustomPagination({ setPage, numOfPages = 10 }) {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: "10px",
      }}
    >

      <ThemeProvider theme={darkTheme}>
        <Pagination
          count={numOfPages}
          onChange={(e) => handlePageChange(e.target.textContent)}
          shape="rounded"
          hideNextButton
          hidePrevButton
          // color="red"
        />
      </ThemeProvider>

    </div>
  );
}

export default CustomPagination;

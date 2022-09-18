import React from "react";
import Pagination from "@mui/material/Pagination";
const CustomPagination = ({ setPage, numberOfpage = 10 }) => {
  const handelPagechange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div>
      <Pagination
        count={numberOfpage}
        color="secondary"
        hideNextButton
        hidePrevButton
        onChange={(e) => handelPagechange(e.target.textContent)}
      />
    </div>
  );
};

export default CustomPagination;

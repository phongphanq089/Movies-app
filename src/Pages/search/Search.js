import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import axios from "axios";
import SingleContent from "../../compoments/SingleContent/SingleContent";
import CustomPagination from "../../compoments/pagination/CustomPagination";
function Search() {
  const [type, setType] = useState(0);
  const [page, setPage] = useState(1);
  const [searchText, setSearchText] = useState("");
  const [content, setContent] = useState();
  const [numerOfpage, setNumberOfpage] = useState();

  const fetchSearch = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/search/${
          type ? "tv" : "movie"
        }?api_key=60032d0b175c07c98da61408215c78e9&language=en-US&query=${searchText}&page=${page}&include_adult=false`
      );
      setContent(data.results);
      setNumberOfpage(data.total_pages);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    window.scroll(0, 0);
    fetchSearch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, page]);

  return (
    <div>
      <div
        className="search"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <TextField
          className="searchBox"
          label="Search"
          variant="filled"
          style={{
            backgroundColor: "#fff",
            borderRadius: "10px",
            flex: "1",
            marginRight: "40px",
          }}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="contained" onClick={fetchSearch}>
          <SearchIcon />
        </Button>
      </div>
      <Tabs
        value={type}
        onChange={(e, newValue) => {
          setType(newValue);
          setPage(1);
        }}
        aria-label="disabled tabs example"
      >
        <Tab style={{ width: "50%" }} label="Search Movies" />
        <Tab style={{ width: "50%" }} label="Search TV Series" />
      </Tabs>

      <div className="trending">
        {content &&
          content.map((cont, index) => (
            <SingleContent
              key={cont.id}
              id={cont.id}
              poster={cont.poster_path}
              title={cont.title || cont.name}
              date={cont.first_air_date || cont.release_date}
              media_type={type ? "tv" : "movie"}
              vote_average={cont.vote_average}
            />
          ))}
        {searchText &&
          !content &&
          (type ? <h2>No Series Found</h2> : <h2>No Movies Found</h2>)}
      </div>
      {numerOfpage > 1 && (
        <div className="panigation">
          <CustomPagination setPage={setPage} numberOfpage={numerOfpage} />
        </div>
      )}
    </div>
  );
}

export default Search;

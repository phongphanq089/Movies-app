/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import axios from "axios";
import "./trending.css";
import { useEffect } from "react";
import { useState } from "react";
import SingleContent from "../../compoments/SingleContent/SingleContent";
import CustomPagination from "../../compoments/pagination/CustomPagination";

const Trending = () => {
  
  const [content, setContent] = useState([]);
  const [page, setPage] = useState(2)
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=60032d0b175c07c98da61408215c78e9&page=${page}`
    );
    setContent(data.results);
    
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);
  return (
    <div>
      <span className="pagetitle">trending</span>
     
      <div className="trending">
        {content &&
          content.map((cont, index) => (
            <SingleContent
              key={cont.id}
              id={cont.id}
              poster={cont.poster_path}
              title={cont.title || cont.name}
              date={cont.first_air_date || cont.release_date}
              media_type={cont.media_type}
              vote_average={cont.vote_average}
            />
          ))}
      </div>
      <div className="panigation">
      <CustomPagination setPage = {setPage}/>
      </div>
    </div>
  );
};

export default Trending;

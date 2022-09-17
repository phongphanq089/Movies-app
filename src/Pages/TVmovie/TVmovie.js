import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import SingleContent from "../../compoments/SingleContent/SingleContent";
import CustomPagination from "../../compoments/pagination/CustomPagination";
import Genres from "../../compoments/genres/Genres";
import useGenre from "../../compoments/Hooks/useGenres";
const TVmovies = () => {
  const [genres, setGenres] = useState(["phong"]);
  
  const [selectedGenres, setSelectedGenres] = useState([]);

  const [page, setPage] =useState(1)
  const [content, setContent] = useState([]);
  const [numOfPages, setNumOfPages] = useState();
  const genreforURL = useGenre(selectedGenres)
  const fetchMovies = async() =>{
    const {data} = await axios.get(`https://api.themoviedb.org/3/discover/tv?api_key=60032d0b175c07c98da61408215c78e9&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_genres=${genreforURL}`)
   
    setContent(data.results);
    setNumOfPages(data.total_pages);
  }

  useEffect(() => {
    fetchMovies()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[page, genreforURL])

  return (
  <div>
    <span className="pagetitle">Movie</span>
    <Genres
       type = "tv"
       genres = {genres}
       setPage = {setPage}
       setGenres = {setGenres}
       selectedGenres = {selectedGenres}
       setSelectedGenres = {setSelectedGenres}
      />
    <div className="trending">
      {content &&
        content.map((cont, index) => (
          <SingleContent
            key={cont.id}
            id={cont.id}
            poster={cont.poster_path}
            title={cont.title || cont.name}
            date={cont.first_air_date || cont.release_date}
            media_type= "Movies"
            vote_average={cont.vote_average}
          />
        ))}
    </div>
    <div className="panigation">
    <CustomPagination setPage = {setPage} numberOfpage = {numOfPages}/>
    </div>
  </div>
  )
};

export default TVmovies;

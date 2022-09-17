import React, { useEffect } from 'react'
import Chip from '@mui/material/Chip';
import axios from 'axios';
const Genres = ({ type, genres, setPage, setGenres, selectedGenres, setSelectedGenres }) => {
     console.log(selectedGenres)
    const handelAdd = (genre) => {
       setSelectedGenres([...selectedGenres, genre])
       setGenres(genres.filter(g => g.id !== genre.id))
       setPage(1)
    }
    const handelDeleted = (genre) => {
     setSelectedGenres(selectedGenres.filter(select => select.id !== genre.id))
     setGenres([...genres, genre])
     setPage(1)
  }
     const fecthGenres = async () => {
          const { data } = await axios.get(
               `https://api.themoviedb.org/3/genre/${type}/list?api_key=60032d0b175c07c98da61408215c78e9&language=en-US`

          );
          setGenres(data.genres);
         
         };
         

     useEffect(() => {
          fecthGenres();

          return () => {
               setGenres({})
          }
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, [])
     return (
          <div >
               { selectedGenres&& selectedGenres.map((genre,index) => {         
                         return (
                              <Chip key={genre.index} 
                              label= {genre.name} 
                              color="primary"
                               style={{margin : " 4px 5px"}} 
                                clickable
                                onDelete={() => handelDeleted(genre)}
                              />
                         )
                    })}
               { genres && genres.map((genre) => {         
                         return (
                              <Chip key={genre.index} 
                              label= {genre.name} 
                              color="success"
                               style={{margin : " 4px 5px"}} 
                                clickable
                               onClick = {() => handelAdd(genre)}
                              />
                         )
                    })}
          </div>


     )
}

export default Genres

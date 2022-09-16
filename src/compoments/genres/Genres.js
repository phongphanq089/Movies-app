import React, { useEffect } from 'react'
import axios from 'axios';
const Genres = ({type,genres,setPage , setGenres,selectedGenres, setSelectedGenres}) => {
     const fecthGenres = async() => {
          const { data } = await axios.get(
               `https://api.themoviedb.org/3/genre/${type}/list?api_key=60032d0b175c07c98da61408215c78e9&language=en-US`
              
             );
             setGenres(data.genres);
             console.log(data)
           };
          
          
     useEffect(()=>{
          fecthGenres();
         
     return () =>{
          setGenres({})
     }
     // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
  return (
   <div></div>
      
   
  )
}

export default Genres

import React from 'react';
import MoviesCard from './MoviesCard';
import { useEffect, useState } from 'react';



const API_URL = "https://jsonplaceholder.typicode.com/photos";

const MoviesLayout = () =>{
    const [movies, setMovies] = useState([]);

  const httpRequest = async() =>{
    const response = await fetch(`${API_URL}`)
    const data = await response.json();
    //console.log(data);
    setMovies(data);
  } 

   useEffect(() =>{
    httpRequest();
}, []);


    return(
        <div>
            {movies.map((movie) =>(
            <MoviesCard key = {movie.id} movie = {movie} />
            ))};

        </div>
        
    );
}

export default MoviesLayout;
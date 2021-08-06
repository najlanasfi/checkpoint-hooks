import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({movies,setMovies}) => {
    return (
        <div>
            {
                movies.map((movie)=>(
                <MovieCard movies={movies} movie={movie} setMovies={setMovies} />
                ))
            }
    
            
        </div>
    )
}
export default MovieList

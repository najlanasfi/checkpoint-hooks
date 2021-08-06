import React , {useState} from "react";
import {Button} from "react-bootstrap";
import "./styles.css";
const Filter = ({movies,setMovies}) => {
    const [searchCondition, setSearchCondition]=useState('');
return ( 

<div className='col col-sm-4'>
<h1><i class="bi bi-search">Search title:</i></h1>
<input onChange={(e)=>setSearchCondition(e.target.value)}></input> 
 {movies.filter(movie => movie.title.includes(searchCondition)).map(filteredMovie => (
    <li>
      {filteredMovie.title}
     </li> 
     ))}
   
</div>
);
}

export default Filter;
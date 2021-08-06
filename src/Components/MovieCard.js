import React from 'react'
import {useState} from 'react';
import {Alert} from 'react-bootstrap'
import {Container,Col,Row,Image} from 'react-bootstrap'
import {Card,Button,ListGroup,ListGroupItem} from "react-bootstrap"
import { Rating } from 'react-simple-star-rating'
import { CardGroup} from 'react-bootstrap'
function MovieCard({movies,movie,setMovies}){
 
  const [rating, setRating] = useState(0)

  const handleRating = (rate) => {
    setRating(rate)
  }

return (
    
  /*<Container>
    <Row>
      <Col xs={6} md={4}>
      <Image src="" thumbnail />
    </Col></Row>
  </Container>*/
<div className="Cardcontainer">

     
  <Card className="bg-dark text-white"  style={{ width: "25rem" }}>
  {movie.image}
   
  <Card.ImgOverlay>
    <Card.Title style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>{movie.title}</Card.Title>
    <Card.Text style={{ textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black'}}>
      {movie.description}
    </Card.Text>
    <Card.Text><Rating onClick={handleRating} ratingValue={movie.rating}/>
    </Card.Text>
  </Card.ImgOverlay>
</Card>
<br></br>

</div>
  
)}
export default MovieCard
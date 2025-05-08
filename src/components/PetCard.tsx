import { Link } from "react-router-dom";
import { Pet } from "../models/Pet";
import { Card } from "react-bootstrap";


interface PetCardProps {
  pet: Pet;
}

export function PetCard(props: PetCardProps) {
  return (
    <>
      <style>
        {`.card-img-top {
    width: 100%;
    height: auto;
    object-fit: cover;
    max-height: 350px;
}`}
      </style>
      <Card>
        <Card.Img variant="top" src={`img/${props.pet.image}`}></Card.Img>
        <Card.Body>
          <Card.Title>
            {props.pet.name} {props.pet.breed}
          </Card.Title>
          {props.pet.description}
          <br/>
          </Card.Body>
          <Card.Footer> 
            
          <Link to={`/adoptions/${props.pet.id}`} className="btn btn-primary ml-2">Adopt Me</Link> 

          <Link to={`/details/${props.pet.id}`} className="btn btn-secondary ml-2">Details</Link> 

          
          </Card.Footer>
      </Card>
    </>
  );
}

import { Pet } from "../models/Pet";
import { Card } from "react-bootstrap";
// import '..src/components/css/PetCard.css';
 //petfinder\src\components\css\Petcard.css
interface PetCardProps {
  pet: Pet;
}

export function PetCard(props: PetCardProps) {
  return (
    <Card>
      <Card.Img variant="top" src={`img/${props.pet.image}`}></Card.Img>
      <Card.Body>
        <Card.Title>
          {props.pet.name} {props.pet.breed}
        </Card.Title>
        {props.pet.description}
        <button className="btn btn-primary">Adopt Me</button>
        <button className="btn btn-secondary">Details</button>
      </Card.Body>
    </Card>
  );
}

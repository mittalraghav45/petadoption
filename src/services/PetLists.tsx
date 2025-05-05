import { useEffect, useState } from "react";
import { Pet } from "../models/Pet";
import { getPets } from "./petService";
import { PetCard } from "../components/PetCard";
import { Col, Row } from "react-bootstrap";

export function PetList() {
  const [pets, setPets] = useState<Pet[]>([]);

  useEffect(() => {
    getPets().then((pets) => {
      setPets(pets);
      // console.log(pets);
    });
  }, []);
  return (
    <div className="PetList">
      <Row>
        {pets.map((pet) => (
          <Col lg={4}>
            <PetCard pet={pet} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

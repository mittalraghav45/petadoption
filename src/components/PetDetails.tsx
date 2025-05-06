import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Pet } from "../models/Pet";
import { getPetById } from "../services/petService";
import { Card, Col, Row } from "react-bootstrap";

export function PetDetails(){
    const {id}=useParams();
    const [pet,setPet]=useState<Pet | null>(null)

    useEffect(()=>{
        if(id!=undefined){
            getPetById(Number(id)).then((pet)=>{setPet(pet)})
        }
    },[id])

    return(
        <div className="PetDetails">
            {pet && <Row>
                <Col lg={2}></Col>
                <Col lg={8}>
                <Card>
                    <Card.Title>{pet.name}</Card.Title>
                    <Card.Text>{pet.breed} - {pet.isBoy?'Boy':'Girl'}</Card.Text>
                    <Card.Text>{pet.description}</Card.Text>
                    </Card></Col>
                <Col lg={2}></Col>
                
                </Row>}
        </div>
    );
}
 
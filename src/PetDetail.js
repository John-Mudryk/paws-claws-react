import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PetDetail = () => {

    const {id} = useParams(); // gets the pet id from the url
    const [pet, setPet] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/shelter/${id}`, // wants back-ticks instead of quotation marks
            {method: 'GET', mode: "no-cors"})
            .then(response => {
                console.log(response);
                
            })
            .then((data) => setPet(data))
            .catch((error) => console.error('Error fetching pet details: ', error));
    }, [id]);

    return (
        <div>
            <h2>{pet.name} (ID: {pet.id})</h2>
            <p>Type: {pet.petType} </p>
            <p>Age: {pet.age} </p>
            <p>Health: {pet.health}% </p>
            <p>Happiness: {pet.happiness}% </p>
            <p>Hunger: {pet.hunger}% </p>
            <p>Thirst: {pet.thirst}% </p>
            <div dangerouslySetInnerHTML={{__html: pet.status }}></div>
            <p>Status: {pet.dead ? 'Deceased' : 'Alive'} </p>
        </div>
    );
};

export default PetDetail;
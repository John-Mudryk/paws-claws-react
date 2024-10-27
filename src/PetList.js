import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const PetList = () => {
    
    const [pets, setPets] = useState([])
    useEffect(() => {
        fetch(`http://localhost:8080/api/v1/shelter`, {method: "GET", mode: "no-cors"})
            .then(response => {
                if(!response.ok) {
                    throw new Error("Failed to get pets list");
                }
                return response.json();
            })
            .then(data => setPets(data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <ul>
                {pets.map((pet) => (
                    <li key={pet.id}>
                    <Link to={`/${pet.id}`}>{pet.name} {pet.petType}</Link>
                </li>
                ))}
            </ul>
        </div>
    );
}

export default PetList
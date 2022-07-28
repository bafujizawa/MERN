import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


export const Characters = (props) => {

    const { id } = useParams();

    const [characterName, setCharacterName] = useState("");
    const [hairColor, setHairColor] = useState("");
    const [eyeColor, setEyeColor] = useState("");
    const [birthYear, setBirthYear] = useState("");
    
    axios.get(`https://swapi.dev/api/people/${id}`)
    .then(res => {
        setCharacterName(res.data.name);
        setHairColor(res.data.hair_color);
        setEyeColor(res.data.eye_color);
        setBirthYear(res.data.birth_year);
        // console.log(id)


    })
    .catch(error => console.log(error))

    return (
        <div className='App' id="card">
            <h1 id="name">Name: { characterName }</h1>
            <h2 id="climate">Hair Color: { hairColor }</h2>
            <h2 id="terrain">Eye Color: { eyeColor }</h2>
            <h2 id="population">Birth Year: { birthYear }</h2>
        </div>
    )
}


import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';


export const Planets = (props) => {

    const { id } = useParams();

    const [climate, setClimate] = useState("");
    const [planetName, setPlanetName] = useState("");
    const [terrain, setTerrain] = useState("");
    const [population, setPopulation] = useState("");
    
    axios.get(`https://swapi.dev/api/planets/${id}`)
    .then(res => {
        setClimate(res.data.climate);
        setPlanetName(res.data.name);
        setTerrain(res.data.terrain);
        setPopulation(res.data.population);
        // console.log(id)


    })
    .catch(error => console.log(error))

    return (
        <div className='App' id="card">
            <h1 id="name">Name: { planetName }</h1>
            <h2 id="climate">Climate: { climate }</h2>
            <h2 id="terrain">Planet Terrain: { terrain }</h2>
            <h2 id="population">Population: { population }</h2>
        </div>
    )
}


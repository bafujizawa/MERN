import {useState} from 'react'
import './App.css';
import axios from 'axios';

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [count, setCount] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [pokemonNameList, setPokemonNameList] = useState([])



  const handleFetchClick = () => {
    setIsLoading(true);
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=807/")
    .then(resp => {
      console.log(resp)
      setPokeList(resp.data.results)
      setCount(resp.count)
    })
    .catch((error) => {
      console.log(error)
    })
  }


  return (
    <div>
      <div>
        <button onClick={handleFetchClick}>Click Me!</button>
      </div>
      <div>
        <ul>
            { pokeList.length > 0 && pokeList.map( (item, i) => 
                <li key={ i }>{ item.name }</li> ) }
        </ul>
      </div>
    </div>
  );
}



export default App;

import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import { useParams } from 'react-router'
import { useNavigate } from 'react-router-dom'


import './App.css'

import { Planets } from './views/Planets'
import { Characters } from './views/Characters'
import { NotFound } from './views/NotFound'
import { Search } from './views/Search'

    
function App() {

  let id;
  let type;

  const navigate = useNavigate();

  const handleSearch = (e) => {

    e.preventDefault();
    type = document.getElementById("searchParam").value;  
    id = document.getElementById("searchId").value;
    if(type == "people") {
      navigate(`/people/${id}`)
      // console.log("people")
    } else if(type == "planet") {
      navigate(`/planets/${id}`)
      // console.log("planets")
    }

  }

  return (
    <div className='App'>

      <Routes>
        <Route path="/" element={<Search />}/>

        <Route index path="/planets/:id" element={<Planets />} />
        <Route index path="/people/:id" element={<Characters />} />
        <Route index path="*" element={<NotFound />} />
      </Routes>

      <header>
        <form onSubmit={handleSearch} className='text-center'>
          {/* <p><Link to="/characters/:id">Characters</Link></p>
          <p><Link to="/planets/:id">Planets</Link></p> */}
          <label>Search For: </label>
          <select id="searchParam">
            <option value="people">Character</option>
            <option value="planet">Planet</option>
          </select>
          <label>Id: </label>
          <input type="text" id="searchId"/>
          <button>Search</button>
        </form>
      </header>
    </div>
  );
}
    
export default App;
import logo from './logo.svg';
import './App.css';
// import Form from './components/AuthorForm'
import AllAuthors from './components/AllAuthors'
import { Routes, Route, Link } from 'react-router-dom';
import NewAuthorForm from './components/NewAuthorForm';
import EditAuthorForm from './components/EditAuthorForm'

function App() {
  return (
    <div className="App container">
      <div>
        <h1>Favorite authors</h1>
        <hr />
      </div>

    <Routes>
      <Route exact path='/' element={<AllAuthors />}/>
      <Route exact path='/new' element={<NewAuthorForm />} />
      <Route exact path='/edit/:id' element={<EditAuthorForm />} />
    </Routes>
    
    </div>
  );
}

export default App;

import './App.css';
import Form from './components/Form'
import AllProducts from './components/AllProducts'
import {
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { useState } from 'react';
import OneProduct from './components/OneProduct';
import EditForm from './components/EditForm';


function App() {

  let[ productSubmitted, setProductSubmitted ] = useState(false)

  return (
    <div className="App container">

      <Routes>

        <Route exact path="/" element={
          <>
            <Form productSubmitted={productSubmitted} setProductSubmitted={setProductSubmitted}/>  
            <hr />
            <AllProducts productSubmitted={productSubmitted} setProductSubmitted={setProductSubmitted}/>
          </>
        } />

        <Route exact path="/products/:id" element={<OneProduct/>}></Route>
        <Route exact path="/products/edit/:id" element={<EditForm />}></Route>
      </Routes>

    </div>
  );
}

export default App;

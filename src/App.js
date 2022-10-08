/* TODO: move everything to context*/

//CSS
import './App.css';
//Components
import Card from './components/Card';
import Form from './components/Form';
//Pages
import RecipePage from './pages/RecipePage';
//Hooks, Utils
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [searchValue, setSearchValue] = useState("");
  const [recipieData, setRecipieData] = useState([]);
  const reqUrl = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchValue}&app_id=3f541443&app_key=dec10585058602ee6f860f4779654260`;

  const fetchData = () => axios.get(reqUrl).then((res) => {
    setRecipieData(res.data.hits);
    console.log(recipieData)
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  }

  const handleInput = (e) => {
    setSearchValue(e.target.value);
  }

  return (
    <div className="App">
      <Form handleSubmit={handleSubmit} handleInput={handleInput}/>
      <Card recipieData={recipieData}/>
      <Routes>
          <Route path='/recipepage' element={ <RecipePage /> } />
      </Routes>
    </div>
  );
}

export default App;

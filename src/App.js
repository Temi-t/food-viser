import React, { useEffect, useState } from 'react';
import Recipe from './Recipe';
import './App.css';

function App() {

  const APP_ID = 'e63e0510';
  const APP_KEY = '2c1330f7fd979365d424fe2ae1d7612f';
 


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('pudding');
 


  const getRecipes = async () =>{
    const response = await fetch( `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  

  useEffect(()=>{
    // eslint-disable-next-line
    getRecipes()}, [query]
  );


  const updateSearch = e =>{
    setSearch(e.target.value);
  };

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }




  return (
    <div className="App">
      <h1 className="title"> Food-Viser</h1>
      <p className= 'logo'>🍜</p>
      <p className= 'intro'>Your number-one-food-adviser is here to guide your daily-diet and recipes  </p>
      <form className='search-form' onSubmit={getSearch}>
        <input className='search-bar' type='search' value= {search} onChange={updateSearch} placeholder="  e.g. Hamburger 🍔" />
        <button
         type='submit' 
         className='search-button'>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
          Search
        </button>
      </form>
      <div className='recipes'>
      {recipes.map((recipe)=>(
        <Recipe 
        key={recipe.recipe.label} 
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories}
        image={recipe.recipe.image} 
        ingredients={recipe.recipe.ingredients}
        cholesterol={recipe.recipe.totalDaily.CHOLE.quantity}
        />
      ))}
      </div>
    </div>
  );
}

export default App;

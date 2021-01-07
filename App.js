import React, { useEffect, useState} from "react";
import Food from "./Food"
import './App.css';

const App = () => {
  const API_ID = "1d2d9dca"
  const API_KEY = "af7a6021e072d1ac2b7463b132cf1efa";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getRecipe();
  }, []);

  const getRecipe = async () => {
    // const recipeName = e.target.elements.recipeName.value;
    // e.preventDefault();
    const api_call = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${API_ID}&app_key=${API_KEY}`);
    // console.log(recipeName)

    const results = await api_call.json();
    // this.setState({ recipes: results.recipes })
    // console.log(this.state.recipes)
    setRecipes(results.hits);
    console.log(results.hits);
    
  }

  const searchUpdate = e => {
    setSearch(e.target.value)
    console.log(search)
  }
    return (
      <div className="App">
        <form className="search-form">
          <input className="search-button" type="text" value = {search} onChange ={searchUpdate}/>
          <button className="search-button" type="submit">Search</button>
        </form>
        <header className="App-header">
          <h1 className="App-title">Welcome to Recipe Roulette!</h1>
        </header>
        {recipes.map(food => (
          //<h2>Mau is an imbecile</h2>
          <Food title = {food.recipe.label} totalTime = {food.recipe.totalTime} image = {food.recipe.image} ingredient = {food.recipe.ingredients}/>
          // <Food title = {Food.recipe.label} totalTime = {Food.recipe.totalTime} image = {Food.recipe.image} />
        ))}
      </div>
    );
}

export default App;
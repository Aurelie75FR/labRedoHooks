import React, { useState } from 'react';
import FoodBox from './Components/FoodBox';
import Search from './Components/Search';
import FoodForm from './Components/FoodForm';
import foodJSON from './foods.json';
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodJSON);
  const [searchVal, setSearchVal] = useState('');
  const [displayForm, setDisplayForm] = useState(false);
  const [todayFood, setTodayFood] = useState([]);

  const handleSearch = (value) => {
    setSearchVal(value);
  };

  const toggleForm = () => {
    setDisplayForm(!displayForm);
  };

  const addFood = (food) => {
    setFoods([food, ...foods]);
  };

  const handleSelectFood = (food) => {
    let todayCopy = setTodayFood.slice();
    let found = todayCopy.find((el) => el.name === food.name);
    food.calories *= food.quantity;

    if (found) {
      const foundCopy = { ...found };
      foundCopy.quantity += food.quantity;
      foundCopy.calories += food.calories;
      setTodayFood(
        todayCopy.map((food) => {
        return  food.name === foundCopy.name ? foundCopy : food;
        })
      );
    } else {
      todayCopy.push(food);
      setTodayFood(todayCopy);
    }
  };

  const filteredFood = foods.filter((food) => {
    return food.name.toLocaleLowerCase().includes(searchVal);
  });

  const totalCalories = todayFood.reduce((acc, val) => (acc += val.calories),0);

  return (
    <div className="container">
      <h1 className="title">IronNutrition</h1>

      <div>
          <Search
            handleChange={handleSearch}
            value={searchVal}
          />
        </div>

        <button className="button is-info mb-5" onClick={toggleForm}>
          Create food
        </button>

        
        {displayForm && <FoodForm handleCreateFood={addFood} />}

        <div className="columns">
          <div className="column">
            {filteredFood.map((food, index) => {
              return (
                <FoodBox
                  handleSelect={handleSelectFood}
                  key={index}
                  food={food}
                />
              );
            })}
          </div>

          <div className="column content">
            <h2 className="subtitle">Today's foods</h2>

            <ul>
              {todayFood.map((food, index) => (
                <li key={index}>
                  {food.quantity} {food.name} = {food.calories} cal
                </li>
              ))}
            </ul>

            <strong>Total: {totalCalories} cal</strong>
          </div>
        </div>
    </div>
  );
}

export default App;

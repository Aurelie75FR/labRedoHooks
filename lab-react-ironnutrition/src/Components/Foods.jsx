import React, { useState } from 'react';
import FoodBox from './FoodBox';
import foods from './../foods.json';
import Search from './Search';
import FoodForm from './FoodForm';

const Foods = () => {
  const [form, setForm] = useState(false);
  // const [food, setFood] = useState(foods)
  const [filter, setFilter] = useState(foods);
  const [today, setToday] = useState([]);

  const handleClick = () => {
    return !setForm;
  };

  const filterFood = () => {
    const filtered = foods.filter((el) =>
      el.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())
    );
    setFilter(filtered);
  };

  const pushFood = (food) => {
    const copyFood = [...foods];
    copyFood.unshift(food);
    setForm(false);
    setFilter(copyFood);
  };

  const addFood = (food) => {
    let today = today.slice();
    let found = today.find((el) => el.name === food.name);
    food.calories *= food.quantity;
    if (found) {
      found.quantity += food.quantity;
      found.calories += food.calories;
    } else {
      today.push(food);
    }
    setToday(found);
  };

  const totalCalories = today.reduce((acc, value) => acc + value.calories, 0);
  return (
    <>
      {filter.map((el,i)=>{
          <div style={{width: '70%', float:'left'}}>
              <FoodBox key={i} food={el} addFood={addFood} />
          </div>
      })}
    </>
  );
};

export default Foods;

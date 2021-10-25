import React, { useState } from 'react';

const FoodForm = (props) => {

    //form a refaire 
  const [calories, setCalories] = useState(0);
  const [image, setImage] = useState('');
  const [name, setName] = useState('');

  const handleChange = (e) => {
    [e.target.name] = e.target.value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFood = { calories, image, name };

    props.handleCreateFood(newFood);
  };

  return (
    <form className="my-5" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">
          Name
        </label>
        <div className="control">
          <input
            className="input"
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={handleChange}
            placeholder="name"
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="image">
          Image
        </label>
        <div className="control">
          <input
            className="input"
            name="image"
            id="image"
            type="text"
            value={image}
            onChange={handleChange}
            placeholder="image"
          />
        </div>
      </div>

      <div className="field">
        <label className="label" htmlFor="calories">
          Calories
        </label>
        <div className="control">
          <input
            className="input"
            type="number"
            id="calories"
            name="calories"
            value={calories}
            onChange={handleChange}
            placeholder="calories"
          />
        </div>
      </div>
      <button className="button is-primary">Create</button>
    </form>
  );
};

export default FoodForm;

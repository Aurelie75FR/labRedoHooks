import React, { useState } from 'react';

const FoodBox = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handleChange = (e) => {
    const { value } = e.target;

    setQuantity(Number(value));
  };

  const { name, calories, image } = props.food;

  return (
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src="https://i.imgur.com/eTmWoAN.png" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Pizza</strong> <br />
              <small>400 cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input onChange={handleChange} className="input" type="number" value="1" />
            </div>
            <div className="control">
              <button
              onClick={() => props.addFood({
                  ...food,
                  quantity
              })
              }
              className="button is-info">+</button>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default FoodBox;

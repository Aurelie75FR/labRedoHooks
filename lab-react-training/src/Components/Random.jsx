import React from 'react';

const Random = ({ min, max }) => {
  const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  return (
    <div>
      Random value between {min} and {max} {'=>'} {randomNumber(min, max)}
    </div>
  );
};

export default Random;

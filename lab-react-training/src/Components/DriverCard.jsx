import React from 'react';
import Rating from './Rating';
const DriverCard = ({ name, rating, img, car }) => {
  return (
    <div style={{ background: 'steelblue' }}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <img
          src={img}
          alt={name}
          style={{ width: '80px', clipPath: 'circle(40%)' }}
        />
        <h2>{name}</h2>
      </div>
      <Rating>{rating}</Rating>
      <p>
        {car.model} - {car.licensePlate}
      </p>
    </div>
  );
};

export default DriverCard;

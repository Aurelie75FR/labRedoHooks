import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const RandomBeer = () => {
  const [random, setRandom] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers/random')
      .then((res) => setRandom(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />
      <div>
        <hr />
        <h2>{random.name}</h2>
        <img
          style={{ width: '10%' }}
          src={random.image_url}
          alt={random.name}
        />
        <p>Tagline : {random.tagline}</p>
        <p> Contribute by : {random.contributed_by}</p>
        <hr />
      </div>
    </div>
  );
};

export default RandomBeer;

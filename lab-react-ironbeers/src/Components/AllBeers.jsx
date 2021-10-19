import React, { useState, useEffect } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AllBeers = () => {
  const [beers, setBeers] = useState([]);

  useEffect(() => {
    axios
      .get('https://ih-beers-api2.herokuapp.com/beers')
      //   .then((result) => setBeers(result.data.beers.map(el => el.name)))
      .then((result) => setBeers(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Header />

      {beers.map((el, index) => {
        return (
          <div key={index}>
            <hr />
            <h2>{el.name}</h2>
            <img style={{ width: '10%' }} src={el.image_url} alt={el.name} />
            <p>Tagline : {el.tagline}</p>
            <p> Contribute by : {el.contributed_by}</p>
            <Link exact to={`/beer-details/${el._id}`}>
              See More Info
            </Link>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default AllBeers;

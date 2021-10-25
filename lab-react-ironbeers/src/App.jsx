import React, {useState} from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import AllBeers from './Components/AllBeers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import BeerDetails from './Components/BeerDetails';

import './App.css';
import { uuid } from 'uuidv4';

function App() {

  const [beerList, setBeerList] = useState([]);
  const addNewBeerHandler = (beerName, beerTag, beerContributor) => {
    setBeerList((prevBeerList) => {
      return [
        ...prevBeerList,
        {
          name: beerName,
          tag: beerTag,
          contributor: beerContributor,
          id: uuid,
        },
      ];
    });
  };


  return <div className="App">
<Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/all' component={AllBeers} />
  <Route exact path='/beer/create' render={() => <NewBeer onAddBeer={addNewBeerHandler}/>} />
  <Route exact path='/random' component={RandomBeer} />
  <Route exact path='/beer-details/:id' component={BeerDetails} />
</Switch>
  </div>;
}

export default App;

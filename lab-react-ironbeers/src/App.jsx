import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import AllBeers from './Components/AllBeers';
import RandomBeer from './Components/RandomBeer';
import NewBeer from './Components/NewBeer';
import BeerDetails from './Components/BeerDetails';

import './App.css';

function App() {
  return <div className="App">
<Switch>
  <Route exact path='/' component={Home} />
  <Route exact path='/all' component={AllBeers} />
  <Route exact path='/beer/create' component={NewBeer} />
  <Route exact path='/random' component={RandomBeer} />
  <Route exact path='/beer-details/:id' component={BeerDetails} />
</Switch>

  </div>;
}

export default App;

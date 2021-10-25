import React, { useRef, useState } from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';
import Header from './Header';

const NewBeer = (props) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const name = useRef();
  const contributor = useRef();
  const tagline = useRef();

  const addBeerHandler = (e) => {
    e.preventDefault();
    const enteredName = name.current.value;
    const enteredTagline = tagline.current.value;
    const enteredContributor = contributor.current.value;
    props.onAddBeer(enteredName, enteredTagline, enteredContributor);
    const newBeer = {
      name: enteredName,
      tagline: enteredTagline,
      contributed_by: enteredContributor,
    };
    console.log(newBeer);
    axios
      .post('https://ih-beers-api2.herokuapp.com/beers/new/', newBeer)
      .then(() => {
        console.log('submit');
        setIsSubmitted(true);
      })
      .catch((err) => console.log(err));
    e.target.reset();
  };

  return (
    <div>
      <Header />
      {isSubmitted ? <Redirect to="/all" /> : null}
      <form onSubmit={addBeerHandler}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" ref={name} />
        </div>
        <div>
          <label htmlFor="tagline">Tagline</label>
          <input type="text" name="tagline" id="tagline" ref={tagline} />
        </div>
        <div>
          <label htmlFor="Contributor">Contributor</label>
          <input
            type="text"
            name="Contributor"
            id="Contributor"
            ref={contributor}
          />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default withRouter(NewBeer);

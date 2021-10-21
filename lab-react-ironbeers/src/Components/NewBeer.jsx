import React, { useRef } from 'react';
import axios from 'axios';
import { withRouter, Redirect } from 'react-router-dom';

const NewBeer = () => {
    
//     const [beerList, setBeerList] = useState('https://ih-beer-api.herokuapp.com/beers')
//     const addNewBeerHandler = (bName, bTag, bContributor) =>{
//         setBeerList((prevBeerList) => {
//            return [...prevBeerList, {bName: enteredName, bTag: enteredTagline, bContributor: enteredContributor, id: '1'}]
//         })
//     }
//   const name = useRef();
//   const contributor = useRef();
//   const tagline = useRef();
//   const addBeerHandler = (e) => {
//     e.preventDefault();
//     const enteredName = name.current.value;
//     const enteredTagline = tagline.current.value;
//     const enteredContributor = contributor.current.value;
//   };

const form = useRef()



const handleSubmit = e => {
    e.preventDefault()

    axios.post('https://ih-beers-api2.herokuapp.com/beers/new/', newBeer)
    .then(()=>console.log('submit'))
    .catch(err=>console.log(err))
    e.target.reset()
}



  return <div>

      <form onSubmit={handleSubmit} ref={form}>
<div>
    <label htmlFor="name">Name</label>
    <input type="text" name='name' id="name" />
</div>
<div>
    <label htmlFor="tagline">Tagline</label>
    <input type="text" name='tagline' id="tagline" />
</div>
<div>
    <label htmlFor="Contributor">Contributor</label>
    <input type="text" name='Contributor' id="Contributor" />
</div>
<button>Submit</button>
      </form>
  </div>;
};

export default NewBeer;

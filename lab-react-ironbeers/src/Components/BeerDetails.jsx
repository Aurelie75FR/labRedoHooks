import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './Header'

const BeerDetails = (props) => {
const [beer, setBeer] = useState(null)

useEffect(() => {
    const id = props.match.params.id
    axios.get("https://ih-beers-api2.herokuapp.com/beers/" + id)
    .then(result=>{
        console.log(result.data);
        setBeer(result.data)
    })
    .catch(err=>console.log(err))
  
}, [props.match.params.id])

    return (
        <div>
            <Header/>
            <h1>Beer details</h1>
            <h3>Name : {beer && beer.name}</h3>
            {beer && <img style={{width:"100px"}} src={beer.image_url} alt={beer.name} /> }
            {beer && <p>Description :{beer.description}</p>}
            {beer && <p>Brewed : {beer.first_brewed}</p>}
            {beer && <p>Attenuation :{beer.attenuation_level}</p>}
            {beer && <p>Contributed by : {beer.contributed_by}</p>}
            {beer && <p> Tagline : {beer.tagline}</p>}
            
        </div>
    )
}

export default BeerDetails

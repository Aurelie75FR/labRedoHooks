import React, {useState} from 'react'

const Carousel = ({imgs}) => {
const [image, setImage]= useState(0)

const increment = () => {
    // setImage((nextImg) => nextImg +1)
    setImage((nextImg)=> nextImg === imgs.length -1 ? 0 : nextImg +1)
}

const decrement = () => {
    // setImage((prevImg)=> prevImg -1)
    setImage((prevImg)=> prevImg === 0 ? imgs.length -1 : prevImg -1)
}



    return (
        <div>
            <button onClick={decrement}>previous</button>
            <img src={imgs[image]} alt="people" />
            <button onClick={increment}>next</button>
        </div>
    )
}

export default Carousel

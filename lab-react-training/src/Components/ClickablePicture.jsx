import React,{useState} from 'react'

const ClickablePicture = ({img, imgClicked}) => {
const [image, setImage] = useState(false)

const handleClick = () =>{
    setImage(!image)
}

    return (
        <div onClick={handleClick} >
    <img style={{width : '100px' }} src={image ? imgClicked : img} alt="cool" />        
        </div>
    )
}

export default ClickablePicture

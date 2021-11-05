import React, { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

const RGBColorPicker = () => {
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const handleChangeColor = (color, colorValue) => {
    const parsedValue =
      colorValue > 255 ? 255 : colorValue < 0 ? 0 : colorValue;
    // console.log(color);
    // console.log(colorValue)
    if (color === 'r') {
      setRed(parsedValue);
    } else if (color === 'g') {
      setGreen(parsedValue);
    } else {
      setBlue(parsedValue);
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <SingleColorPicker color="r" callback={handleChangeColor} value={red} />
      <SingleColorPicker color="g" callback={handleChangeColor} value={green} />
      <SingleColorPicker color="b" callback={handleChangeColor} value={blue} />
      <div
        style={{
          backgroundColor: `rgb(${red},${green},${blue})`,
          width: '100px',
          height: '100px',
          border: '2px solid',
          marginTop: '10px',
        }}
      >
        <div>
          rbg({red},{green},{blue}){handleChangeColor}
        </div>
      </div>
    </div>
  );
};

export default RGBColorPicker;

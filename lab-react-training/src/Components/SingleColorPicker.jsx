import React, { useState } from 'react';

const SingleColorPicker = ({ color, callback, colorValue }) => {
  const [value, setValue] = useState(0);

  const handleChange = (e) => {
    callback(color, Number(e.target.value));
    // console.log(e.target.value);
    setValue(e.target.value);
  };

  const rgbaValue = `rgb(${color === 'r' ? value : 0}, 
  ${color === 'g' ? value : 0},
  ${color === 'b' ? value : 0})`;

  const styledDiv = {
    backgroundColor: rgbaValue,
    width: '100px',
    height: '100px',
    border: '2px solid ',
  };

  return (
    <div style={{ display: 'flex', marginTop: '10px' }}>
      <div style={styledDiv}></div>
      <div>
        <input
          type="number"
          min="0"
          max="255"
          onChange={handleChange}
          value={colorValue}
        />
      </div>
    </div>
  );
};

export default SingleColorPicker;

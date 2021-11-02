import React from 'react';

const BoxColor = ({ r, g, b }) => {
  //function to format one value between 0 to 255
  const rgbToHex = (rgb) => {
    let hex = Number(rgb).toString(16);
    if (hex.length < 2) {
      hex = '0' + hex;
    }
    return hex;
  };
  //Now we format for each value
  const formatToHex = (r, g, b) => {
    let red = rgbToHex(r);
    let green = rgbToHex(g);
    let blue = rgbToHex(b);
    return '#' + red + green + blue;
  };

  //the contrast
  const brightness = Math.round(
    (parseInt(r) * 299 + parseInt(g) * 587 + parseInt(b) * 114) / 1000
  );

  //set the text color
  const textColor = brightness > 125 ? 'black' : 'white';

  const styled = {
    width: '300px',
    marginTop: '10px',
    border: '2px solid black',
    textAlign: 'center',
    backgroundColor: `rgb(${r},${g},${b})`,
    color: textColor,
    fontWeight: 'bold',
  };

  return (
    <div>
      <div style={styled}>
        <p>
          rgb({r},{g},{b})
          <br />
          {formatToHex(r, g, b)}
        </p>
      </div>
    </div>
  );
};

export default BoxColor;

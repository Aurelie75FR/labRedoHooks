import React, { useState } from 'react';

const LikeButton = () => {
  const [like, setLike] = useState(0);

  const handleClick = () => {
    setLike((prevLike) => prevLike + 1);
  };
  const colors = ['purple', 'blue', 'green', 'yellow', 'orange', 'red'];
  const randomcolor = colors[like % colors.length];

  const buttonStyle = {
    backgroundColor: randomcolor,
    padding: '10px 20px',
    color: 'white',
  };
  return (
    <div>
      <button onClick={handleClick} style={buttonStyle}>
        {like} {like === 1 ? 'like' : 'likes'}
      </button>
    </div>
  );
};

export default LikeButton;

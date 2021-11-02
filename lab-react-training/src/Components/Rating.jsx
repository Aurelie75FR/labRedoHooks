import React from 'react';

const max = 5;
const Rating = ({ children }) => {
  const rate = Math.round(Number(children));
  const stars = [];
  for (let i = 0; i < max; i++) {
    if (i < rate) {
      stars.push(<span key={i}>★</span>);
    } else {
      stars.push(<span key={i}>☆</span>);
    }
  }

  return <div>{stars}</div>;
};

export default Rating;

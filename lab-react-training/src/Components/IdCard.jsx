import React from 'react';

const IdCard = ({ lastName, firstName, gender, height, birth, picture }) => {
  const convertCmToM = (num) => num / 100;

  const formatDate = (date) => date.toDateString();

  const styleCard = {
    border: '1px solid black',
    padding: '5px',
    width: '350px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center',
  };

  return (
    <div style={styleCard}>
      <div>
        <img src={picture} alt={firstName} />
      </div>
      <div>
        <p>
          <span>
            <b>Firstname :</b>
            {firstName}
          </span>
        </p>
        <p>
          <span>
            <b>Lastname :</b>
            {lastName}
          </span>
        </p>
        <p>
          <span>
            <b>Gender :</b>
            {gender}
          </span>
        </p>
        <p>
          <span>
            <b>Height :</b> {convertCmToM(height)}
          </span>
        </p>
        <p>
          <span>
            <b>Birth :</b> {formatDate(birth)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default IdCard;

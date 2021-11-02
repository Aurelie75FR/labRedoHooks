import React from 'react';

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) => {
  const cardType = {
    Visa: './img/visa.png',
    'Master Card': './img/master-card.svg',
  };

  const hashedcardnumber = (num) => {
    return num.replace(/^[\d-\s]+(?=\d{4})/, '•••• •••• •••• ');
    // num.replace(/[^0-9](?=([0-9{4}]))/g, '•');
    // num.replace(/\d{4}(?= \d{4})/g, '••••');
  };

  const formatMonth = (num) => {
    if (num < 9) {
      return '0' + num;
    } else {
      return num;
    }
  };

  const formatYear = (num) => {
    return num.toString().substr(-2);
  };

  const styleDiv = {
    backgroundColor: bgColor,
    color: color,
    width: '25vw',
    height: '200px',
    borderRadius: '5px',
    margin: '10px',
  };

  return (
    <div style={styleDiv}>
      <img
        style={{ float: 'right', width: '40px', margin: '10px 10px 0 0' }}
        src={cardType[type]}
        alt="credit card"
      />
      <br />
      <h1>{hashedcardnumber(number)}</h1>
      <div style={{ display: 'flex' }}>
        <p style={{ marginLeft: '20px' }}>
          Expires {formatMonth(expirationMonth)}/{formatYear(expirationYear)}
        </p>
        <p style={{ marginLeft: '20px' }}>{bank}</p>
      </div>
      <p style={{ float: 'left', marginLeft: '20px' }}>{owner}</p>
    </div>
  );
};

export default CreditCard;

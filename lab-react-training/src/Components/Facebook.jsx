import React, { useState } from 'react';
import data from './../data/berlin.json';

const Facebook = () => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelect = (country) => {
    setSelectedCountry(country);
  };

  const countryList = [...new Set(data.map((student) => student.country))];
console.log(countryList);


  return (
    <div>
      <button
        style={{
          backgroundColor: selectedCountry === null ? 'dodgerblue' : 'white',
        }}
        className="FaceBook__button"
        onClick={(event) => handleSelect(null)}
      >
        All
      </button>

      {countryList.map((country, index) => {
         return <button
          key={index}
          style={{ backgroundColor: selectedCountry === country ? 'dodgerblue' : 'white' }}
          onClick={(e) => handleSelect(country)}
        >
          {country}
        </button>;
      })}

      {data.map((student, index) => (
        <div
          className="FaceBook__profile"
          key={index}
          style={{
            backgroundColor: selectedCountry === student.country ? 'dodgerblue' : 'white',
          }}
        >
          <img style={{width: '100px'}} src={student.img} alt="" />
          <div>
            <p>
              <span className="FaceBook__field">First name:</span>
              {student.firstName}
            </p>
            <p>
              <span className="FaceBook__field">Last name:</span>
              {student.lastName}
            </p>
            <p>
              <span className="FaceBook__field">Country: </span>
              {student.country}
            </p>
            <p>
              <span className="FaceBook__field">Type: </span>
              {student.isStudent ? 'Student' : 'Teacher'}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Facebook;

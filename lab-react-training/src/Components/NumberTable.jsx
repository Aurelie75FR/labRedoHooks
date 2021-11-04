import React from 'react'

const NumberTable = ({limit}) => {
    console.log(new Array(limit))
    return (
        <div className="NumbersTable">
        {new Array(limit).fill(0).map((cell, index) => (
          <div
            key={index}
            className="cell"
            style={{ backgroundColor: index % 2 === 0 ? 'white' : 'red' }}
          >
            {index + 1}
          </div>
        ))}
      </div>
    )
}

export default NumberTable

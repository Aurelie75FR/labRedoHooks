import React, { useState } from "react";
import contactJSON from "./../contacts.json";

const Contact = () => {
  const [data, setData] = useState(contactJSON.slice(0, 5));

  const addRandom = () => {
    const random = Math.floor(Math.random() * contactJSON.length);
    const randomIndex = contactJSON[random];

    const newList = [...data];
    newList.unshift(randomIndex);
    setData(newList);
  };

  const sortName = () => {
    let copy = [...data];
    copy.sort((a, b) => a.name.localeCompare(b.name));
    setData(copy);
  };
  const sortPopularity = () => {
    let copy = [...data];
    copy.sort((a, b) => {
      if (a.popularity > b.popularity) {
        return 1;
      } else if (a.popularity < b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setData(copy);
  };

  const deleteContact = (indexToDelete) => {
    //  data.filter((c,i)=>{
    //   return  i !== indexToDelete
    // })

    let copy = [...data];
    copy.splice(indexToDelete, 1);
    setData(copy);
  };

  return (
    <>
      <button onClick={addRandom}> Add random contact</button>
      <button onClick={sortName}>Sort by name</button>
      <button onClick={sortPopularity}>Sort by popularity</button>
      <table className="display">
        <thead>
          <tr>
            <td>Picture</td>
            <td>Name</td>
            <td>Popularity</td>
          </tr>
        </thead>
        {data.map((el, index) => {
          return (
            <tbody key={index.id}>
              <tr>
                <td>
                  <img
                    src={el.pictureUrl}
                    alt={el.name}
                    style={{ width: "100px" }}
                  />
                </td>
                <td>{el.name}</td>
                <td>{el.popularity.toFixed(2)}</td>
                <button onClick={() => deleteContact(index)}>Delete</button>
              </tr>
            </tbody>
          );
        })}
      </table>
    </>
  );
};

export default Contact;

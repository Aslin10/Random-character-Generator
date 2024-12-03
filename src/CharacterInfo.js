import React from 'react';

function CharacterInfo({ data }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px",color:"white", backgroundColor:"gray"}}>
      <h2>{data.name}</h2>
      <img src={data.image} alt={data.name} style={{ width: "150px", height: "150px" }} />
      <p>Species: {data.species}</p>
      <p>Gender: {data.gender}</p>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>HomeWorld: {data.homeworld}</p>
    </div>
  );
}

export default CharacterInfo;

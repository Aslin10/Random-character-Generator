import { useState } from 'react';

import CharacterInfo from './CharacterInfo';

function App() {
  const [characters, setCharacters] = useState([]); // Initialize as an array

  function getCharacter() {
    let randomNumber = Math.floor(Math.random() * 88);
    const url = `https://akabab.github.io/starwars-api/api/id/${randomNumber}.json`;
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setCharacters((prevCharacters) => [...prevCharacters, data]); 
      })
      .catch((error) => console.error("Error fetching character:", error));
  }

  return (
    <div className="App"style={{margin:"20px",padding:"10px"}}>
      <button onClick={getCharacter} style={{padding:"10px",backgroundColor:"cyan",border:"none",borderRadius:"5px",fontSize:"20px"}}>Random Character</button>
      {characters.length > 0 ? (
        characters.map((data) => (
          <CharacterInfo key={data.id} data={data} />
        ))
      ) : (
        <p>No characters fetched yet. Click the button to get started!</p>
      )}
    </div>
  );
}

export default App;

import React, { useState, useEffect } from "react";

function MechanicSearch() {
  const [mechanics, setMechanics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetch the mechanics data from the endpoint
    fetch("/mechanics")
      .then((response) => response.json())
      .then((data) => setMechanics(data))
      .catch((error) => console.log(error));
  }, []);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Filter the mechanics based on the search term
    const filteredMechanics = mechanics.filter((mechanic) =>
      mechanic.location.toLowerCase().includes(searchTerm.toLowerCase())
    );
    // Update the search results
    setSearchResults(filteredMechanics);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.map((mechanic) => (
        <div key={mechanic.id}>
          <h2>{mechanic.name}</h2>
          <p>{mechanic.location}</p>
          <p>{mechanic.specialty}</p>
          <p>{mechanic.phone}</p>
        </div>
      ))}
    </div>
  );
}

export default MechanicSearch;

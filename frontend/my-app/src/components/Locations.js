import React, { useEffect, useState } from "react";

function Locations() {
  const [location, setLocation] = useState();
  useEffect(() => {
    fetch("/mechanics")
      .then((r) => r.json())
      .then((data) => setLocation(data));
  }, []);

  return (
    <div>
      <h1>Locations Available as at now</h1>
      <div>
        {Array.isArray(location)
          ? location.map((element) => {
              return (
                <ul>
                  <li>{element.location}</li>
                </ul>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Locations;

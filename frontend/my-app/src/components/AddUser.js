import React, { useState } from "react";
// import { Link } from "react-router-dom";

function AddUser({ id }) {
  const [user, setUser] = useState("");
  const [name, setName] = useState();

  function handleUser(e) {}

  return (
    <div>
      <form onSubmit={handleUser}>
        <div class="card text-center card1">
          <div class="card-body">
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                Name
              </label>
              <input
                onChange={(e) => setUser(e.target.value)}
                type="text"
                class="form-control"
                placeholder="Enter names"
                value={name}
                required
              />

              <input class="btn btn-primary btn1" type="submit" required />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddUser;

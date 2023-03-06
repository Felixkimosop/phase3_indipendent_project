import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function AddUser({ id }) {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("/users")
      .then((r) => r.json())
      .then((data) => setUser(data));
  }, []);

  const [name, setName] = useState("");

  function handleUser(e) {
    e.preventDefault();
    setUser([...user, name]);
    setName("");

    fetch("/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name }),
    })
      .then((r) => r.json())
      .then(document.location.reload());
  }

  return (
    <div>
      <div className="form-s">
        <form onSubmit={handleUser}>
          <div class="card text-center card1">
            <div class="card-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Enter names"
                  value={name}
                  required
                />

                <input class="btn btn-primary btn1" type="submit" required />
                <Link
                  to={`/available/${id}/name/comment`}
                  class="btn btn-primary btn1"
                  type="next"
                >
                  {" "}
                  next
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="mech">
        {Array.isArray(user)
          ? user.map((review, index) => {
              return (
                <div className="card" key={index} style={{ width: "18rem;" }}>
                  <h5 class="card-header">Your Id is {review.id}</h5>
                  <div class="card-body">
                    <p class="card-text">{review.name}</p>
                    <a href="/" class="btn btn-primary">
                      Update
                    </a>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default AddUser;

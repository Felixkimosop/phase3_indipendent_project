import React, { useState } from "react";

function AddMechanic({ mechanic, setMechanic }) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [expertise, setExpertise] = useState();
  const [location, setLocation] = useState();
  const [tel, setTel] = useState();
  const [image_url, setImage_url] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    setMechanic([
      ...mechanic,
      { name, age, expertise, location, tel, image_url },
    ]);
    setName("");
    setAge(0);
    setExpertise("");
    setLocation("");
    setTel(0);
    setImage_url("");

    fetch(" /mechanics", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        age,
        expertise,
        location,
        tel,
        image_url,
      }),
    })
      .then((res) => res.json())
      .then(document.location.reload());
  }

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <div class="card text-center card1">
            <div class="card-header card2">Add A Mechanic</div>
            <div class="card-body">
              <div class="mb-3">
                <label class="form-label">Mechanic Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Enter Name"
                  value={name}
                />

                <label for="exampleFormControlInput1" class="form-label">
                  Age
                </label>
                <input
                  onChange={(e) => setAge(e.target.value)}
                  type="integer"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="10"
                  value={age}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Expertise
                </label>
                <input
                  onChange={(e) => setExpertise(e.target.value)}
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Engine Repairer"
                  value={expertise}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Location
                </label>
                <input
                  onChange={(e) => setLocation(e.target.value)}
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Githurai"
                  value={location}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Telephone Number
                </label>
                <input
                  onChange={(e) => setTel(e.target.value)}
                  type="integer"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Githurai"
                  value={tel}
                />

                <label for="exampleFormControlInput1" class="form-label">
                  Image URL
                </label>
                <input
                  onChange={(e) => setImage_url(e.target.value)}
                  type="file"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="https://bit.ly/3y5kzRX"
                  value={image_url}
                />
              </div>

              <button class="btn btn-primary btn1">Add Mechanic</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddMechanic;

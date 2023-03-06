import React, { useState, useEffect } from "react";

function AddComment() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then((data) => setComment(data));
  }, []);

  const [review, setReview] = useState();
  const [ratings, setRatings] = useState();
  const [mechanic_id, setMechanic_id] = useState();
  const [user_id, setUser_id] = useState();

  function handleComment(e) {
    e.preventDefault();
    setComment([...comment, review, ratings, mechanic_id, user_id]);
    setReview("");
    setRatings("");
    setMechanic_id(0);
    setUser_id(0);

    fetch("/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        review,
        ratings,
        mechanic_id,
        user_id,
      }),
    })
      .then((r) => r.json())
      .then(document.location.reload());
  }

  //   function handleUpdate(e) {
  //     e.preventDefault();
  //     setComment([...comment, review, ratings]);
  //     setReview("");
  //     setRatings("");

  //     fetch(`/reviews/${id}`, {
  //       method: "PATCH",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         review,
  //         ratings,
  //       }),
  //     })
  //       .then((r) => r.json())
  //       .then(document.location.reload());
  //   }

  return (
    <div>
      <div>
        <form onSubmit={handleComment}>
          <div class="card text-center card1">
            <div class="card-header card2">Add A Comment</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Comment
                </label>
                <input
                  onChange={(e) => setReview(e.target.value)}
                  type="text"
                  class="form-control"
                  placeholder="Enter comment"
                  value={review}
                />

                <label for="exampleFormControlInput1" class="form-label">
                  Rating
                </label>
                <input
                  onChange={(e) => setRatings(e.target.value)}
                  type="integer"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="10"
                  value={ratings}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Mechanic Id
                </label>
                <input
                  onChange={(e) => setMechanic_id(e.target.value)}
                  type="integer"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="10"
                  value={mechanic_id}
                />
                <label for="exampleFormControlInput1" class="form-label">
                  Your Id
                </label>
                <input
                  onChange={(e) => setUser_id(e.target.value)}
                  type="integer"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="10"
                  value={user_id}
                />
              </div>

              <button class="btn btn-primary btn1">Add Comment</button>
            </div>
          </div>
        </form>
      </div>

      <div className=" mech">
        {Array.isArray(comment)
          ? comment.map((review, index) => {
              return (
                <div className="card" key={index} style={{ width: "18rem;" }}>
                  <h5 class="card-header">Comment</h5>
                  <div class="card-body">
                    <p class="card-text">{review.review}</p>
                    <p class="card-text">{review.ratings}</p>
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

export default AddComment;

import React from "react";

function AddComment() {
  return (
    <div>
      <div>
        <form>
          <div class="card text-center card1">
            <div class="card-header card2">Add A Comment</div>
            <div class="card-body">
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Comment
                </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter comment"
                />

                <label for="exampleFormControlInput1" class="form-label">
                  Rating
                </label>
                <input
                  type="integer"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="10"
                />
              </div>

              <button class="btn btn-primary btn1">Add Comment</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddComment;

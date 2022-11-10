import React from "react";
import UseTitle from "../../../hooks/UseTitle";

const EditReview = ({ review }) => {
  UseTitle("edit review");
  return (
    <div>
      <textarea
        className="textarea textarea-bordered h-24 w-3/4"
        placeholder="please Update your Review "
      ></textarea>
      <button type="submit">submit</button>
    </div>
  );
};

export default EditReview;

import React from "react";
import UseTitle from "../../../hooks/UseTitle";

const EditReview = () => {
  UseTitle("edit review");
  return (
    <div>
      <textarea
        className="textarea textarea-bordered h-24 w-3/4"
        placeholder="please Update your Review "
      ></textarea>
    </div>
  );
};

export default EditReview;

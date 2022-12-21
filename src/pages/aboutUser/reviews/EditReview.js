import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import UseTitle from "../../../hooks/UseTitle";

const EditReview = () => {
  UseTitle("edit review");
  const reviewInfo = useLoaderData();
  const { review, _id } = reviewInfo;

  //   const editHandlerSubmit = (e) => {
  //     e.preventDefault();
  //     const form = e.target;
  //     const editReview = form.editReview.value;
  //     reviewInfo.review = editReview;
  // setEditReview()
  //     console.log(reviewInfo);
  //   };

  const editHandlerSubmit = (e) => {
    console.log(review);
    e.preventDefault();
    fetch(`https://service-review-server-side.vercel.app/reviews/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: review }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          // const remaning = reviews.filter((rvs) => rvs._id !== _id);
          // const editated = reviews.find((rvs) => rvs._id === _id);
          // const form = e.target;
          // const editReview = form.editReview.value;

        }
      });
  };
  console.log(reviewInfo);

  return (
    <div>
      <form onSubmit={editHandlerSubmit}>
        <textarea
          name="editReview"
          className="textarea textarea-bordered h-24 w-3/4"
          placeholder="please Update your Review "
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default EditReview;

import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/authProvider'/AuthPovider";

const Review = ({ service }) => {
  const { user } = useContext(AuthContext);
  // const { email, photoURL, displayName } = user;
  const { _id } = service;
  console.log(_id);
  const handlerReview = (e) => {
    e.preventDefault();
    const form = e.target;
    const review = form.review.value;
    const email = user?.email || "unregister";
    const name = user?.displayName;
    const photoURL = user?.photoURL;
    const timestamp = Date.now();
    // // timestamp in seconds
    // console.log(Math.floor(timestamp / 1000));

    const customerReview = {
      serviceID: _id,
      email,
      name,
      photoURL,
      review,
      timestamp,
    };
    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Thank You so much for your review!");
          form.reset();
        }
      })
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h2 className="text-center">Review section</h2>

      <div>
        <form onSubmit={handlerReview}>
          <textarea
            name="review"
            className="textarea textarea-bordered h-24 w-1/2"
            placeholder="Add your valuable review"
          ></textarea>
          <input
            className="btn bg-emerald-700 mt-5"
            type="submit"
            required
            value="Add Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;

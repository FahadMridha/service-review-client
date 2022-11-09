import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authProvider'/AuthPovider";
import ReviewTable from "./ReviewTable";

const Review = ({ service }) => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  const { _id } = service;
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
      serviceName: service.name,
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
  useEffect(() => {
    fetch(`http://localhost:5000/reviews?serviceID=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  return (
    <div>
      <h2 className="text-center text-2xl font-bold text-lime-800">
        Review section
      </h2>
      <div>
        <div>
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Review</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <ReviewTable key={review._id} review={review}></ReviewTable>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handlerReview}>
          {user ? (
            <>
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
            </>
          ) : (
            <h3 className="text-2xl text-center">
              Please{" "}
              <Link to="/login" className="font-semibold text-lime-800">
                Login
              </Link>{" "}
              to add a review
            </h3>
          )}
        </form>
      </div>
    </div>
  );
};

export default Review;

import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/authProvider'/AuthPovider";
import UseTitle from "../../../hooks/UseTitle";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  UseTitle("my reviews");

  useEffect(() => {
    fetch(
      `https://service-review-server-side.vercel.app/my-reviews?email=${user?.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("genius-token")}`,
        },
      }
    )
      .then((res) => {
        if (res.status === 403 || res.status === 401) {
          logOut()
            .then(() => {})
            .catch((error) => console.log(error));
        }
        return res.json();
      })
      .then((data) => setReviews(data));
  }, [user?.email]);

  const handleDeleteReview = (id) => {
    const procced = window.confirm(
      "Are you sure You want to delete this product"
    );
    if (procced) {
      fetch(`https://service-review-server-side.vercel.app/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("successfully Delete");
            const remaningReviews = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaningReviews);
          }
        });
    }
  };

  const handlerUpdateReview = (reviewInfo) => {
    // console.log(review);
    const { review, _id } = reviewInfo;
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
          const remaning = reviews.filter((rvs) => rvs._id !== _id);
          const editated = reviews.find((rvs) => rvs._id === _id);
          editated.status = {};
          const newReviews = [...remaning, editated];
          setReviews(newReviews);
        }
      });
  };

  return (
    <div>
      <div>
        <div className=" w-full">
          <table className="table w-full">
            <thead>
              <tr className="w-3/4">
                <th>Service Name</th>
                <th>Review</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length === 0 ? (
                <div className="text-2xl text-center font-bold text-lime-700">
                  No reviews were added.
                </div>
              ) : (
                <>
                  {reviews.map((review) => (
                    <tr key={review._id}>
                      <td>
                        <div className="font-bold">{review.serviceName}</div>
                      </td>
                      <td>
                        <div className="font-bold">{review.review}</div>
                      </td>
                      <th>
                        <Link to="/editReview">
                          {" "}
                          <button
                            onClick={() => handlerUpdateReview(review)}
                            className="btn btn-ghost btn-xs"
                          >
                            Edit
                          </button>
                        </Link>
                      </th>
                      <th>
                        <label>
                          <button
                            onClick={() => handleDeleteReview(review._id)}
                            className="btn btn-ghost"
                          >
                            X
                          </button>
                        </label>
                      </th>
                    </tr>
                  ))}
                </>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;

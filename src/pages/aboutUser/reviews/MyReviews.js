import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authProvider'/AuthPovider";
import UseTitle from "../../../hooks/UseTitle";

const MyReviews = () => {
  const { user, logOut } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);
  UseTitle("my reviews");


  useEffect(() => {
    fetch(`http://localhost:5000/my-reviews?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
    })
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

  const handleDeleteOrder = (id) => {
    console.log(id);
    const procced = window.confirm(
      "Are you sure You want to delete this product"
    );
    if (procced) {
      fetch(`http://localhost:5000/reviews/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("successfully Delete");
            const remaningReviews = reviews.filter((rvw) => rvw._id !== id);
            setReviews(remaningReviews);
          }
        });
    }
  };

  const handlerUpdateOrder = () => {};

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Service Name</th>
                <th>Review</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {reviews.length === 0 ? (
                <h2 className="text-2xl text-center font-bold text-lime-300">
                  No reviews were added
                </h2>
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
                        <button
                          onClick={() => handlerUpdateOrder(review)}
                          className="btn btn-ghost btn-xs"
                        >
                          Edit
                          {/* {status ? status : "Pendding"} */}
                        </button>
                      </th>
                      <th>
                        <label>
                          <button
                            onClick={() => handleDeleteOrder(review._id)}
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

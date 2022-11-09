import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/authProvider'/AuthPovider";

const MyReviews = () => {
  const { user } = useContext(AuthContext);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [user?.email]);
  const handleDeleteOrder = () => {};
  const handlerUpdateOrder = () => {};

  return (
    <div>
      <div>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>Delete</th>
                <th>Review</th>
                <th>Update</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((review) => (
                <tr key={review._id}>
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
                  <td>
                    <div className="font-bold">{review.review}</div>
                  </td>
                  <th>
                    <button
                      onClick={() => handlerUpdateOrder(review._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Edit
                      {/* {status ? status : "Pendding"} */}
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;

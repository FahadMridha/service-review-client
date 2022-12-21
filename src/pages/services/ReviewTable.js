import React from "react";
const ReviewTable = ({ review }) => {
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={review.photoURL} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">{review.name}</div>
          </div>
        </div>
      </td>
      <td>{review.review}</td>
    </tr>
  );
};

export default ReviewTable;

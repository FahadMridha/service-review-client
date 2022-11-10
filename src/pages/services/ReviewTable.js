import React, { useContext } from "react";
import { AuthContext } from "../../context/authProvider'/AuthPovider";

const ReviewTable = ({ review }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={review?.photoURL} alt="Avatar" />
            </div>
          </div>
          <div>
            <div className="font-bold">{user?.displayName}</div>
          </div>
        </div>
      </td>
      <td>{review.review}</td>
    </tr>
  );
};

export default ReviewTable;

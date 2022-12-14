import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authProvider'/AuthPovider";
import logo from "../../assets/images/logo1.png";
import UseTitle from "../../hooks/UseTitle";

const Header = () => {
  UseTitle("header");
  const { user, logOut } = useContext(AuthContext);

  const handlerLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const menuItems = (
    <>
      <>
        <li className="font-semibold">
          <Link to="/home">Home</Link>
        </li>
        <li className="font-semibold">
          <Link to="/services">Services</Link>
        </li>
        <li className="font-semibold">
          <Link to="/blog">Blog</Link>
        </li>
      </>
      {user?.email ? (
        <>
          <li className="font-semibold">
            <Link to="/myReviews">My reviews</Link>
          </li>
          <li className="font-semibold">
            <Link to="/addService">Add Service</Link>
          </li>
          <li className="font-semibold">
            <button onClick={handlerLogout} className="btb btn-ghost">
              Log Out
            </button>
          </li>
        </>
      ) : (
        <li className="font-semibold">
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar h-20 mb-12 p-12 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <img className="w-10 h-10" src={logo} alt="" />
        <Link to="/" className="">
          <span className="text-5xl font-semibold text-lime-800 ">
            BUY FITNESS
          </span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;

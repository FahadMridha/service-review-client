import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/authProvider'/AuthPovider";
import UseTitle from "../../../hooks/UseTitle";
import Spinner from "../../../shared/spinner/Spinner";

const SignUp = () => {
  const {
    createUser,
    providerLogin,
    updateUserProfile,
    userEmailVarification,
  } = useContext(AuthContext);
  const [error, setError] = useState("");
  let [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  UseTitle("sign up");
  const handlerSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;

    //user create with email and password by firebase/auth
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        //update user profile
        handlerUpdateUserProfile(name, photoURL);

        //user email varification funcition

        // handlerUserEmailVarification();
      })
      .catch((error) => {
        console.error("error:", error);
        setError(error.message);
        setLoading(false);
      });
    if (loading) {
      return <Spinner></Spinner>;
    }
  };
  //user google signin function
  const handlerGoogleSignUp = () => {
    providerLogin(googleProvider)
      .then(() => {})
      .catch((error) => {
        console.error("error:", error);
      });
  };
  const handlerUpdateUserProfile = (name, photoURL) => {
    const profile = { displayName: name, photoURL: photoURL };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  // const handlerUserEmailVarification = () => {
  //   userEmailVarification()
  //     .then(() => {})
  //     .catch((error) => console.log(error));
  // };

  return (
    <div className="flex justify-center items-center pt-8 ">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-lime-200 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Register</h1>
          <p className="text-sm text-gray-400">Create a new account</p>
        </div>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="pb-3 text-sm dark:text-gray-400 underline">
            Signup with social accounts
          </p>
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
        </div>
        <div className="flex justify-center space-x-4 border shadow-xl">
          <button
            onClick={handlerGoogleSignUp}
            aria-label="Log in with Google"
            className="p-3 rounded-sm hover:bg-slate-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-5 h-5 fill-current"
            >
              <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
            </svg>
          </button>
        </div>
        <p className="text-lg font-bold my-4">
          -----------------------OR---------------------
        </p>
        <form
          noValidate=""
          action=""
          className="space-y-12 ng-untouched ng-pristine ng-valid"
          onSubmit={handlerSubmit}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900  bg-slate-700 text-teal-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-slate-700 text-teal-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Photo Url
              </label>
              <input
                type="text"
                name="photoURL"
                id="photoURL"
                placeholder="Provide your Photo URL"
                className="w-full px-3 py-2 border rounded-md border-gray-300 focus:border-gray-900 bg-slate-700 text-teal-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between mb-2">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2 border rounded-md border-gray-300 bg-slate-700 focus:border-gray-900 text-teal-500"
              />
            </div>
          </div>
          <div className="space-y-2">
            <div>
              <button
                type="submit"
                className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100"
              >
                Sign Up
              </button>
            </div>
          </div>
          <span className="text-yellow-600">{error} </span>
        </form>

        <span className="px-6 text-sm text-center text-gray-400">
          Already have an account yet?{" "}
          <Link to="/login" className="hover:underline text-gray-900 font-bold">
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;

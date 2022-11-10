import { Loader } from "@mantine/core";
import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/authProvider'/AuthPovider";
import UseTitle from "../../../hooks/UseTitle";

const Login = () => {
  const { user, signIn, providerLogin, loding, setLoding } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  UseTitle("login");
  const handlerLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      // .then((result) => {
      //   const user = result.user;
      //   toast.success("successfully login");
      //   form.reset();
      //   setError("");
      //   navigate(from, { replace: true });
      // })
      .then((result) => {
        const user = result.user;
        const currentUser = {
          email: user.email,
        };
        setLoding(false);
        // get jwt token
        fetch("https://service-review-server-side.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            //set local storage
            localStorage.setItem("genius-token", data.token);
          });
        toast.success("successfully login with JWT token");
        navigate(from, { replace: true });
      })

      .catch((error) => {
        console.error("error:", error);
        setError(error.message);
      })
      .finally(() => {});
  };

  //user google signin function
  const handlerGoogleSignUp = () => {
    providerLogin(googleProvider).then((result) => {
      const user = result.user;
      const currentUser = {
        email: user.email,
      };

      // get jwt token
      fetch("https://service-review-server-side.vercel.app/jwt", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(currentUser),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          //set local storage
          localStorage.setItem("genius-token", data.token);
        });
    });
    navigate(from, { replace: true }).catch((error) => {
      console.error("error:", error);
    });
  };

  return (
    <div className="flex justify-center items-center pt-8">
      <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-lime-200 text-gray-900">
        <div className="mb-8 text-center">
          <h1 className="my-3 text-4xl font-bold">Sign in</h1>
          <p className="text-sm text-gray-400">
            Sign in to access your account
          </p>
        </div>
        <form
          noValidate=""
          action=""
          className="space-y-6 ng-untouched ng-pristine ng-valid"
          onSubmit={handlerLogin}
        >
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email Here"
                className="w-full px-3 py-2  rounded-md  focus:border-gray-900 bg-slate-700 text-green-500"
                data-temp-mail-org="0"
              />
            </div>
            <div>
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm mb-2">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="*******"
                className="w-full px-3 py-2  rounded-md  bg-slate-700 focus:border-gray-900 text-green-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-400"
            >
              Sign in
            </button>
          </div>
          <span className="text-yellow-600">{error} </span>
        </form>

        <p className="text-lg font-bold my-4">
          -----------------------OR---------------------
        </p>
        <div className="flex items-center pt-4 space-x-1">
          <div className="flex-1 h-px sm:w-16 dark:bg-gray-700"></div>
          <p className="pb-3 text-sm text-lime-600 underline">
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
        <p className="px-6 text-sm text-center text-gray-400">
          Don't have an account yet?{" "}
          <Link
            to="/signup"
            className="hover:underline ttext-gray-900 font-bold"
          >
            Sign up
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;

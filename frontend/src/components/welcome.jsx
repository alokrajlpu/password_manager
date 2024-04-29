import React, { useState } from "react";
import "./welcome.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const welcome = () => {
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const change = () => {
    setLogin(!isLogin);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("svc");

    try {
      axios
        .post("http://localhost:3000/login", { email, password })
        .then((e) => {
          {
            console.log(e.data);
            if (e.data === "Correct") {
              navigate("/home");
            } else if (e.data === "Incorrect password") {
              toast.error("Incorrect password");
            } else {
              navigate("/");
            }
          }
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log("error occured from the server");
    }
  };

  //sign-up page

  const signUP = async (event) => {
    event.preventDefault();
    console.log("svc");

    try {
      axios
        .post("http://localhost:3000/signup", { email, password })
        .then((e) => {
          // console.log(e.data)
          if (e.data === "Created") {
            setLogin(true);
            // navigate("/home");
          } else {
            toast.error(e.data);
          }
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log("error occured from the server");
    }
  };
  return (
    <>
      <div className="bgi">
        <h1>Welcome to password Manager</h1>
        {isLogin == true ? (
          // this is for the login
          <div
            style={{
              backgroundImage: `url(https://t4.ftcdn.net/jpg/05/66/23/51/360_F_566235195_nhDDuQpommcxK9SBtY2gq5IxvsJxCIdE.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="flex h-screen items-center justify-center"
          >
            <div className="w-80 rounded-lg bg-black bg-opacity-25 p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Login to Password Manager
              </h2>
              {/* <form method='post'> */}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    id="password"
                    name="password"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Login
                  </button>
                  <a href="#" className="text-sm text-green-500">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <div className="mt-4">
                <p className="text-sm">
                  Don't have an account?{" "}
                  <a href="#" onClick={change} className="text-green-500">
                    Sign up
                  </a>
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div
            className="flex h-screen items-center justify-center"
            style={{
              backgroundImage: `url(https://t4.ftcdn.net/jpg/05/66/23/51/360_F_566235195_nhDDuQpommcxK9SBtY2gq5IxvsJxCIdE.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-80 rounded-lg bg-black bg-opacity-25 p-8 shadow-md">
              <h2 className="mb-4 text-2xl font-semibold text-white">
                Sign Up
              </h2>

              {/* this is fo rthe signup  */}
              {/* <form method='post'> */}
              <form onSubmit={signUP}>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    id="email"
                    name="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  />
                </div>
                {/* <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-white">Password</label>
            <input type="password" id="password" name="password" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50" />
          </div> */}
                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-white"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    name="confirmpassword"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="rounded-md bg-green-500 px-4 py-2 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50"
                  >
                    Sign Up
                  </button>
                  <a href="#" className="text-sm text-green-500">
                    Forgot Password?
                  </a>
                </div>
              </form>
              <div className="mt-4">
                <p className="text-sm">
                  Have an account?{" "}
                  <a href="/" onClick={change} className="text-green-500">
                    Login
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
      <ToastContainer />
    </>
  );
};
export default welcome;

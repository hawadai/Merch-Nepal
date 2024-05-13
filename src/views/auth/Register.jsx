import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Register = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
      <div class="relative min-w-screen bg-gray-50 min-h-screen min-w-screen flex items-center justify-center">
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute bottom-20 -right-40 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="absolute -bottom-10 right-12 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="w-[350px] text-[#000000] p-2">
            <h2 className="text-xl mb-3 font-bold ">Welcome!</h2>
            <p className="text-sm mb-3 font-semibold underline">
              Please register your account
            </p>

            <form onSubmit={submit}>
              <div className="flex flex-col w-full gap-1 mb-3 font-semibold">
                <label htmlFor="name">Name</label>
                <input
                  onChange={inputHandle}
                  value={state.name}
                  className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                  type="text"
                  name="name"
                  placeholder="Name"
                  id="name"
                  required
                />
              </div>
              <div className="flex flex-col w-full gap-1 mb-3 font-semibold">
                <label htmlFor="email">Email</label>
                <input
                  onChange={inputHandle}
                  value={state.email}
                  className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                  type="email"
                  name="email"
                  placeholder="email"
                  id="email"
                  required
                />
              </div>

              <div className="flex flex-col w-full gap-1 mb-3 font-semibold">
                <label htmlFor="password">Password</label>
                <input
                  onChange={inputHandle}
                  value={state.password}
                  className="px-3 py-2 outline-none border border-slate-700 bg-transparent rounded-md"
                  type="password"
                  name="password"
                  placeholder="Password"
                  id="password"
                  required
                />
              </div>

              <div className="flex items-center w-full gap-3 mb-3">
                <input
                  className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                  type="checkbox"
                  name="checkbox"
                  id="checkbox"
                />
                <label htmlFor="checkbox"> I agree to terms & conditions</label>
              </div>

              <button className="bg-[#2b5f53] w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3">
                Sign Up
              </button>

              <div className="flex items-center mb-3 gap-3 justify-center">
                <p>
                  Already Have an account ?{" "}
                  <Link
                    className="font-semibold hover:underline decoration-2"
                    to="/login"
                  >
                    Sign In
                  </Link>{" "}
                </p>
              </div>
              

              <div className="w-full flex justify-center items-center mb-3">
                <div className="w-[45%] bg-slate-700 h-[2px]"></div>
                <div className="w-[10%] flex justify-center items-center">
                  <span className="pb-1 font-semibold">Or</span>
                </div>
                <div className="w-[45%] bg-slate-700 h-[2px] "></div>
              </div>

              <div className="flex justify-center items-center gap-3">
                <div className="w-[135px] h-[35px] flex rounded-lg bg-[#ffd553] shadow-md hover:bg-[#4285f4] shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden">
                  <span>
                    <FaGoogle />
                  </span>
                </div>

                <div className="w-[135px] h-[35px] flex rounded-lg bg-[#83b3ff] shadow-md hover:bg-[#4285f4] shadow-indigo-700/50 justify-center cursor-pointer items-center overflow-hidden">
                  <span>
                    <FaFacebook />
                  </span>
                </div>
              </div>
            </form>
          
        </div>
      </div>    
  );
};

export default Register;

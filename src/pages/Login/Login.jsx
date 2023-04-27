import React from 'react';
import { BsKeyFill } from "react-icons/bs";
import LoginImg from "../../assets/svg/login.svg";
import { RiShieldKeyholeFill } from "react-icons/ri";
const Login = () => {
    return (
        <div className='container mx-auto'>
             <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mt-10">
        {" "}
        <RiShieldKeyholeFill className="text-red-600 text-5xl md:text-4xl lg:text-6xl inline" /> Please Login
      </h2>
      <div className="flex flex-col md:flex-row justify-between  items-center">
        <div className="md:w-full">
          <img className="w-full" src={LoginImg} alt="" />
        </div>

        <div className="md:w-10/12">
        <div className="card flex-shrink-0 w-full rounded-lg max-w-sm shadow-stone-400 shadow-md  bg-base-100">
      <div className="card-body p-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="text" placeholder="password" className="input input-bordered" />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  style={{ background: "red" }}
              className="btn rounded border-0 shadow-red-500 shadow-md"> <BsKeyFill className='me-1 text-xl'/> Login </button>
        </div>
      </div>
    </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;

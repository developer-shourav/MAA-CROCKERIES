import React from 'react';
import { BsKeyFill, BsGithub } from "react-icons/bs";
import {FaFacebookF} from 'react-icons/fa';
import LoginImg from "../../assets/svg/login.svg";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { Link } from 'react-router-dom';
import GoogleImg from '../../assets/icons/google.png';
const Login = () => {
    return (
        <div className='container  mx-auto'>
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
          <input type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <small>New to Ma Crockeries? <Link to="/register" className='text-violet-600 font-bold underline'> Register</Link></small>
          </label>
        </div>
        <div className="form-control mt-6">
          <button  style={{ background: "red" }}
              className="btn rounded border-0 shadow-red-500 shadow-md"> <BsKeyFill className='me-1 text-xl'/> Login </button>
        </div>
        <div className='flex justify-center items-center mt-2'> 
          <hr className='inline-block w-full border-1 border-red-400' /> <span className='mx-3 font-bold'> Or </span> <hr className='inline-block border-1 w-full border-red-400' />
        </div>

        <button className='btn normal-case bg-white mb-1   text-black rounded hover:bg-slate-200 google-btn-shadow border-0'> <img className='w-6 me-2' src={GoogleImg} alt="" /> Login with Google</button>

        <button className='btn normal-case text-white mb-1   bg-black rounded  shadow-sm border-0'> <BsGithub className=' text-2xl me-2'  /> Login with GitHub</button>

        <button className='btn normal-case bg-blue-600 mb-1  text-white rounded hover:bg-blue-500  shadow-sm border-0'> <FaFacebookF className=' text-2xl me-1'  /> Login with Facebook</button>

      </div>
    </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;

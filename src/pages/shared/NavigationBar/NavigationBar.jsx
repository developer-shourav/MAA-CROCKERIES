import React from "react";
import Logo from "../../../assets/web-logo.png";
import { AiOutlineMenu } from "react-icons/ai";
const NavigationBar = () => {
  return (
      <div className="navbar container shadow-md rounded-md mx-auto bg-base-100">
        <div className="flex-1">
          <span className="flex items-center ">
            {" "}
            <img className="w-8 md:w-16 me-2 md:me-3" src={Logo} alt="" />{" "}
            <span className="text-red-500 font-bold text-lg md:text-2xl">
              MAA CROCKERIES
            </span>{" "}
          </span>
        </div>
        
        <div className="hidden md:flex flex-none">
          <ul className="menu font-bold menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>Login</a>
            </li>
            <li>
              <a>Register</a>
            </li>
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10  avatar online">
                  <img
                    className="rounded-full border-green-400 border-2"
                    src="https://i.ibb.co/pwyjxW5/clint3.jpg"
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
            
          </ul>
          
        </div>

        <div className=" sm:visible md:hidden dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <AiOutlineMenu className="text-red-600 text-xl"> </AiOutlineMenu>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>

        
      </div>

  );
};

export default NavigationBar;

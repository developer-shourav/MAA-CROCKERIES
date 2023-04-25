import React from 'react';
import Logo from '../../../assets/web-logo.png';
const NavigationBar = () => {
    return (
        <div className="navbar container shadow-md rounded-md mx-auto bg-base-100">
        <div className="flex-1">
          <span className='flex items-center '> <img className='w-16 me-3' src={Logo} alt="" /> <span className='text-red-500 font-bold text-2xl'>MAA CROCKERIES</span> </span>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
              <a>
                Parent
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
    );
};

export default NavigationBar;
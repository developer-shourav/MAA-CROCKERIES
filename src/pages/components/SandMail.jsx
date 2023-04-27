import React from "react";
import {IoIosSend} from 'react-icons/io';
import EmailHi from '../../assets/animation/email.gif'
const SandMail = () => {
  return (
    <div className="w-11/12 mx-auto">

      <div className="flex justify-between gap-4 items-center">
        <div className="w-10/12">
                <input className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-2  border-red-500 " type="text" name="name" placeholder="Your Name"  />
                <input className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-2  border-red-500 " type="email" name="email" placeholder="Your Email"  />
                <input className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-2  border-red-500 " type="text" name="contact"  placeholder="Contact Info" />
                <textarea className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-2  border-red-500 " name="" id="" cols="30" rows="6" placeholder="Your Message"></textarea>
                <button style={{background:'red'}} className="btn rounded border-0 shadow-red-500 shadow-md"><IoIosSend className="text-xl" /> Send Message</button>
              </div>

        <div className='w-full'>

          <img className="w-full" src={EmailHi} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SandMail;



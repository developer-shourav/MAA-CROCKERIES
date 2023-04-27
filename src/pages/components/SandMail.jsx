import React from "react";
import Lottie from "lottie-react";
import EmailHi from "../../assets/animation/send-mail.json";
const SandMail = () => {
  return (
    <div className="w-100 mx-auto">

      <div className="flex ">
        <div className="w-1/2">
                <input className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-3  border-red-500 " type="text" name="name" placeholder="Your Name"  />
                <input className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-3  border-red-500 " type="email" name="email" placeholder="Your Email"  />
                <input className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-3  border-red-500 " type="text" name="contact"  placeholder="Contact Info" />
                <textarea className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-3  border-red-500 " name="" id="" cols="30" rows="6" placeholder="Your Message"></textarea>
                <button className="btn">Send Message</button>
              </div>

        <div className='w-full'>
          <Lottie animationData={EmailHi} loop={true} />
          
        </div>
      </div>
    </div>
  );
};

export default SandMail;



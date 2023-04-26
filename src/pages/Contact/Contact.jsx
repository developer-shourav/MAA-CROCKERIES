import React from "react";
import ProfileImg from "../../assets/profile.jpg";
import ProfileImg2 from "../../assets/profile2.png";
import Profile from "../../assets/final-profile.png";
import Logo from "../../assets/web-logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { ImLocation } from "react-icons/im";
const Contact = () => {
  return (
    <div className="container mx-auto">
      <div>
      <div className="flex flex-col md:flex-row mt-5 md:mt-20 mx-3 md:mx-5 lg:mx-20 items-center justify-start">
        {/* <div className='w-1/2'>
               <img className="mask mask-squircle w-3/4 " src={ProfileImg} />
               </div> */}

        <div className="md:w-1/2">
          <img className=" w-4/4 md:w-3/4 " src={Profile} />
        </div>

        <div className="mb-3 ms-5 md:ms-0 md:w-1/2">
          <div>
            <span className="flex items-end mt-5 ">
              {" "}
              <img
                className="w-8 md:w-12 me-2 md:me-3"
                src={Logo}
                alt=""
              />{" "}
              <span className=" font-bold text-lg md:text-2xl">
                MAA CROCKERIES
              </span>{" "}
            </span>
          </div>

          <h3 className="font-bold text-xl mt-2 mb-5">
            <span className="text-red-500">Proprietor: </span> Vojon Chakroborti
          </h3>

          <p className="flex items-center gap-2 mb-1 text-lg font-bold">
            <FaPhoneAlt className="text-red-500 text-xl" />{" "}
            <a href="tel:+8801917098252">+880 1917098252</a>
          </p>
          <p className="flex items-center gap-2 mb-1 text-lg font-bold">
            <FaPhoneAlt className="text-red-500 text-xl" />
            <a href="tel:+8801725775882">+880 1725775882</a>
          </p>
          <p className="flex items-center gap-2 mb-1 text-lg font-bold">
            <MdEmail className="text-red-500 text-2xl" />{" "}
            <a href="mailto:bhajancb@gmail.com" target="_blank">
              bhajancb@gmail.com
            </a>
          </p>
          <p className="flex items-center gap-2 mb-1 text-lg font-bold">
            <IoLogoWhatsapp className="text-red-500 text-2xl" />{" "}
            <a href="https://wa.me/+8801917098252" target="_blank">
              +880 1917-098252
            </a>
          </p>
          <p className="flex items-center gap-2 mb-1 text-lg font-bold">
            {" "}
            <BsFacebook className="text-red-500 text-2xl" />{" "}
            <a href="https://www.facebook.com/cbvojon" target="_blank">
              https://www.facebook.com/cbvojon
            </a>
          </p>
          <p className="flex items-center gap-2 mb-1 mt-2 text-lg font-bold">
            <ImLocation className="text-red-500 text-2xl" /> Bagmar Bazar, Nawabgonj,
            Dhaka-1320
          </p>
        </div>
      </div>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center"> <ImLocation className="text-red-500 text-5xl md:text-4xl lg:text-6xl inline" /> Our Store Location</h2>
      </div>
      <div>
      <iframe className="w-11/12 mx-auto mt-5 h-80 rounded-lg shadow-lg border-4 border-red-500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6899.478206041183!2d90.15848163756515!3d23.644793557459245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755912dc0a63217%3A0x913670e4cc548653!2sBagmara%20bazar%20DHAKA%2C%201320!3m2!1d23.6524215!2d90.1649322!5e0!3m2!1sen!2sbd!4v1682534030555!5m2!1sen!2sbd"></iframe>


      </div>
    </div>
  );
};

export default Contact;

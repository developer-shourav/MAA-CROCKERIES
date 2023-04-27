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
import StoreMap from "../components/storeMap";
import SandMail from "../components/SandMail";
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
                className="w-10 md:w-12 me-2 md:me-3"
                src={Logo}
                alt=""
              />{" "}
              <span className=" font-bold text-xl md:text-2xl">
                MAA CROCKERIES
              </span>{" "}
            </span>
          </div>

          <h3 className="font-bold text-lg mt-2 mb-5">
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


      <div>
       {/* -------Email Sending Animation--------- */}
       
       <SandMail> </SandMail>
      </div>

      <div>
        {/* Location and Map */}
        <StoreMap></StoreMap>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import { ImLocation } from "react-icons/im";
const StoreMap = () => {
  return (
    <>
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center">
          {" "}
          <ImLocation className="text-red-500 text-5xl md:text-4xl lg:text-6xl inline" />{" "}
          Our Store Location
        </h2>
      </div>
      <div>
        <iframe
          className="w-11/12 mx-auto mt-5 h-80 rounded-lg shadow-lg border-4 border-red-500"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          id="gmap_canvas"
          src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d6899.478206041183!2d90.15848163756515!3d23.644793557459245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3755912dc0a63217%3A0x913670e4cc548653!2sBagmara%20bazar%20DHAKA%2C%201320!3m2!1d23.6524215!2d90.1649322!5e0!3m2!1sen!2sbd!4v1682534030555!5m2!1sen!2sbd"
        ></iframe>
      </div>
    </>
  );
};

export default StoreMap;

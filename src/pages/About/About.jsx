import React from "react";
import AboutImg from "../../assets/about.png";
import BrandsListMarquee from "../components/BrandsListMarquee";
const About = () => {
  return (
    <div className="">
      <h2 className="text-4xl font-bold text-center my-10"> About Us</h2>
      <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between container mx-auto">
        <div className="md:w-1/2 px-5 md:ms-10 lg:ms-40 ">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-5xl my-2 md:mb-5">
            {" "}
            We Are Your Mate{" "}
          </h1>
          <h1 className="font-bold text-2xl  md:text-4xl  mb-5">
            {" "}
            For Providing You The Best Products{" "}
          </h1>

          <p className="lg:w-3/4  text-gray-700 mb-5">
            We stands for quality, authenticity, trust and satisfaction. We have
            a massive collection of products and brands that you will love.
          </p>
          <button
            style={{ background: "red" }}
            className="btn border-0 rounded-none px-8 "
          >
            {" "}
            Shop Now{" "}
          </button>
        </div>

        <div className="md:w-1/2">
          <img
            className="mx-auto w-9/12 md:w-10/12 lg:w-4/5 px-10  md:px-0 lg:px-10"
            src={AboutImg}
            alt=""
          />
        </div>
      </div>

      <div className="hidden md:block md:py-6 lg:py-10 about-bg my-5 shadow-red-700 shadow-md">

        <div className="container mx-auto flex items-center justify-evenly text-center font-bold ">
          <div>
            <h3 className="md:text-3xl lg:text-4xl">1000+</h3>
            <p>Product Items</p>
          </div>

          <div className="">
          <h3 className="md:text-3xl lg:text-4xl">20+</h3>
            <p>Popular Brands</p>
          </div>

          <div>
          <h3 className="md:text-3xl lg:text-4xl">25 Years</h3>
            <p>Business Experience</p>
          </div>

          <div>
            <h3 className=" md:text-3xl lg:text-4xl">90%</h3>
            <p>Return Customers</p>
          </div>
        </div>
      </div>
      <BrandsListMarquee> </BrandsListMarquee>
    </div>
  );
};

export default About;

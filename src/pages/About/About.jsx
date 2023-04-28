import React from "react";
import AboutImg from '../../assets/about.png';
const About = () => {
  return (
    <div className="container mx-auto">
       <h2 className="text-4xl font-bold text-center my-10">
        {" "}
        About Us
      </h2>
       <div className="flex items-center justify-between">
         <div className="w-1/2 lg:ms-40 " >
         <h1 className='font-bold text-3xl md:text-5xl my-2 md:mb-5'> Chose Our Top </h1>
                <h1 className='font-bold text-2xl  md:text-4xl lg:text-6xl mb-5'> Crockeries Here </h1>
                
                
                <p className='md:w-3/4 text-gray-700 mb-5'>We stands for quality, authenticity, trust and satisfaction. We have a massive collection of products and brands that you will love.</p>
                <button style={{background:'red'}} className='btn border-0 rounded-none px-8 '> Shop Now </button>

                
         </div>

         <div className="w-1/2">
           <img className="mx-auto"  src={AboutImg} alt="" />
         </div>

       </div>
    </div>
  );
};

export default About;

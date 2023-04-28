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
         <div className="w-1/2" >
         <h1 className='font-bold text-3xl md:text-5xl my-2 md:mb-5'> Chose Our Top </h1>
                <h1 className='font-bold text-2xl  md:text-4xl lg:text-6xl mb-5'> Crockeries Here </h1>
                
                
                <p className='md:w-3/4 text-gray-700 mb-5'>We stands for quality, authenticity, trust and satisfaction. We have a massive collection of products and brands that you will love.</p>
                <button style={{background:'red'}} className='btn border-0 rounded-none px-8 '> Shop Now </button>

                 <div className=' mt-5 md:mt-10 font-bold flex gap-20'>

                   <div>
                     <h3 className=' text-2xl md:text-3xl'>1534+</h3>
                     <p ><small>Total Products</small></p>
                   </div>

                   <div>
                   <h3 className=' text-2xl md:text-3xl'>1000+</h3>
                     <p><small>Monthly Customers</small></p>
                   </div>

                 </div>
         </div>

         <div className="w-1/2">
           <img className="mx-auto "  src={AboutImg} alt="" />
         </div>

       </div>
    </div>
  );
};

export default About;

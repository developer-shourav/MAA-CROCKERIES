import React from 'react';
import Banner from '../../assets/banner/banner.png';
import Banner1 from '../../assets/banner/banner1.jpg';
import Banner2 from '../../assets/banner/banner2.jpg';

const Home = () => {
    return (
        <div className='container mx-auto'>

            <div className='flex my-10 items-center justify-between'>
               <div className='w-1/2 ps-10'>
                <h1 className='font-bold text-5xl mb-5'> Chose Our Top </h1>
                <h1 className='font-bold  md:text-4xl lg:text-6xl mb-5'> Crockeries Here </h1>
                
                
                <p className='w-3/4 text-gray-700 mb-5'>We stands for quality, authenticity, trust and satisfaction. We have a massive collection of products and brands that you will love.</p>
                <button style={{background:'red'}} className='btn border-0 rounded-none px-8 '> Shop Now </button>

                 <div className='mt-10 font-bold flex gap-20'>

                   <div>
                     <h3 className='text-3xl'>1534+</h3>
                     <p ><small>Total Products</small></p>
                   </div>

                   <div>
                   <h3 className='text-3xl'>1000+</h3>
                     <p><small>Monthly Customers</small></p>
                   </div>

                 </div>
               </div>

               <div className='w-1/2'>
                <img  src={Banner} alt="" />
               </div>
            </div>
           
        </div>
    );
};

export default Home;
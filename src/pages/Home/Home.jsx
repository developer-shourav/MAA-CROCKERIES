import React from 'react';
import Banner from '../../assets/banner/banner.png';
import Banner1 from '../../assets/banner/banner1.jpg';
import Banner2 from '../../assets/banner/banner2.jpg';

const Home = () => {
    return (
        <div className='container mx-auto'>
          {/* ------Top Banner------ */}
            <div className='flex px-5 lg:px-0 flex-col-reverse md:flex-row my-4 md:my-8 lg:my-10 items-center justify-between'>
               <div className='md:w-1/2 lg:ps-10'>
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

               <div className='md:w-1/2'>
                <img  src={Banner} alt="" />
               </div>
            </div>
           {/* ------Product Card ------ */}

           <div className=''>
              <h2 className='text-center font-bold text-4xl pt-5'>What we mainly offer?</h2>

              <div className='grid grid-cols-4'>
                <div>
                    <span></span>
                    <h4></h4>
                    
                </div>

              </div>
           </div>
        </div>
    );
};

export default Home;
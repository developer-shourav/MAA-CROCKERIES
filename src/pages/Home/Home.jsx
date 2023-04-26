import React from 'react';
import Banner1 from '../../assets/banner/banner1.jpg';
import Banner2 from '../../assets/banner/banner2.jpg';

const Home = () => {
    return (
        <div className='container mx-auto'>

            <div className='flex my-10'>
                <div className='w-1/2'>
                    <img src={Banner1} alt="" />
                </div>
                <div>
                    <h1>We are the best </h1>
                </div>
            </div>
           
        </div>
    );
};

export default Home;
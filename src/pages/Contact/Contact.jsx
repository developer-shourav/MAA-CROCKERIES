import React from 'react';
import ProfileImg from '../../assets/profile.jpg'
import ProfileImg2 from '../../assets/profile2.png'
import Profile from '../../assets/final-profile.png'
import Logo from "../../assets/web-logo.png";
const Contact = () => {
    return (
        <div className='container mx-auto'>

            <div className='flex mt-20 mx-20 items-center justify-start'>

               {/* <div className='w-1/2'>
               <img className="mask mask-squircle w-3/4 " src={ProfileImg} />
               </div> */}

               <div className='w-1/2'>
               <img className=" w-3/4 " src={Profile} />
               </div>

               <div>
                  <div>
                    <span className="flex items-end ">
                        {" "}
                        <img className="w-8 md:w-12 me-2 md:me-3" src={Logo} alt="" />{" "}
                        <span className=" font-bold text-lg md:text-2xl">
                        MAA CROCKERIES
                        </span>{" "}
                    </span>
                  </div>

                 <h3 className='font-bold text-xl my-2'><span className='text-red-500'>Proprietor: </span> Vojon Chakroborti</h3>

                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, hic.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, hic.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, hic.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, hic.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, hic.</p>
                 
               </div>
            </div>
        </div>
    );
};

export default Contact;
import React from 'react';
import ProfileImg from '../../assets/profile.jpg'
import ProfileImg2 from '../../assets/profile2.png'
const Contact = () => {
    return (
        <div className='container mx-auto'>

            <div className='flex mt-20 mx-20 items-start justify-start'>
               <div className='w-1/2'>
               <img className="mask mask-squircle w-3/4 " src={ProfileImg} />
               </div>

               <div>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, hic.</p>
                 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, hic.</p>
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
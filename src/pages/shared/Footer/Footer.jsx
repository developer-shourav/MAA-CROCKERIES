import React from 'react';
import Logo from "../../../assets/web-logo.png";
const Footer = () => {
    return (
        <footer   style={{backgroundColor:'#1b1b1b', color:'#8d8d8d'}} className='py-10  list-none'>

            <div className="container mx-auto">
               <div className='grid grid-cols-2 md:grid-cols-4'>
               

                <div>
                    <h4 className='text-white text-lg font-bold'>About Us</h4>
                    <li>Inception</li>
                    <li>Milestones</li>
                    <li>Factories</li>
                </div>

                <div>
                <h4 className='text-white text-lg font-bold'>BUSINESSES</h4>
                    <li>CATEGORY & PRODUCT</li>
                    <li>Brands</li>
                    <li>Export</li>
                </div>

                <div>
                <h4 className='text-white text-lg font-bold'>Legal</h4>
                    <li>Privacy</li>
                    <li>Terms and Conditions</li>
                    <li>FAQ</li>
                </div>

                <div>
                    <img className='w-20' src={Logo} alt="" />
                    <h3 style={{color:"red"}} className=' font-bold text-2xl'>MAA CROCKERIES</h3>
                    <li>PRAN-RFL Center,</li>
                    <li>105 Pragati Sarani, Middle Badda, Dhaka-</li>
                    <li>1212</li>
                    <li>Bangladesh</li>
                </div>

               </div>
            </div>
            
            <hr style={{borderTop:'1px solid #383838'}}   />

            <div  className="container py-6 mt-2  mx-auto flex justify-between items-center">
                <div className=''>
                    <span>Terms of Use</span>
                    <span className='mx-6'>Privacy</span>
                    <span className='me-6'>About</span>
                    <span>Contact</span>
                </div>

                <div>
                    <span>© 2023 MAA CROCKERIES | All rights reserved</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;


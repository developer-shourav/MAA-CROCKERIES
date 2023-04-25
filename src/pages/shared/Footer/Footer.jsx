import React from 'react';
import Logo from "../../../assets/web-logo.png";
const Footer = () => {
    return (
        <footer  style={{backgroundColor:'#1b1b1b'}} className='py-10 text-white list-none'>

            <div className="container mx-auto">
               <div className='grid grid-cols-2 md:grid-cols-4'>
                <div>
                    <img className='w-20' src={Logo} alt="" />
                    <h3 className='text-red-500 font-bold text-2xl'>MAA CROCKERIES</h3>
                    <li>PRAN-RFL Center,</li>
                    <li>105 Pragati Sarani, Middle Badda, Dhaka-</li>
                    <li>1212</li>
                    <li>Bangladesh</li>
                </div>

                <div>
                    <h4>About Us</h4>
                    <li>Inception</li>
                    <li>Milestones</li>
                    <li>Factories</li>
                </div>

                <div>
                    <h4>BUSINESSES</h4>
                    <li>CATEGORY & PRODUCT</li>
                    <li>Brands</li>
                    <li>Export</li>
                </div>

                <div>
                    <h4>Legal</h4>
                    <li>Privacy</li>
                    <li>Terms and Conditions</li>
                    <li>FAQ</li>
                </div>

               </div>
            </div>
            
            <hr style={{border:'1px solid #383838'}}   />
        </footer>
    );
};

export default Footer;


/* 
li color: #8d8d8d 

*/

import React from "react";
import AboutImg from '../../assets/about.jpg';
const About = () => {
  return (
    <div className="container mx-auto">
       <div className="grid grid-cols-2 items-center">
         <div>
          <img src={AboutImg} alt="" />
         </div>

         <div>
           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate odio minima quibusdam modi architecto, alias laudantium repellendus, maxime quaerat eius quas? Illum eveniet enim unde quam laboriosam. Enim laboriosam officiis et magnam temporibus facilis voluptas quisquam maiores reprehenderit quae quia recusandae, repellat odio molestias eum distinctio aliquam? Explicabo alias adipisci esse pariatur consequuntur, blanditiis nam ea! Dolor, voluptatibus possimus dolorem soluta enim aspernatur dolore repudiandae aliquam maxime quae voluptatem aliquid, est ipsa veniam assumenda molestias ipsam fugiat incidunt minima. Optio nesciunt a, amet recusandae accusamus iure? Autem nulla ipsum temporibus laudantium harum minus dignissimos corrupti. Quis possimus similique voluptatem doloribus.</p>
         </div>

       </div>
    </div>
  );
};

export default About;

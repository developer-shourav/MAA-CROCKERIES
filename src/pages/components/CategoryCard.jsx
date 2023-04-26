import React from "react";

const CategoryCard = () => {
  return (
    <div className="border-2 hover:bg-black hover:text-white shadow-lg transition-all delay-100 md:p-3 md:px-1 lg:p-5 rounded-lg text-center border-red-500 font-bold md:text-lg lg:text-2xl">
      <img
        className="mx-auto w-16 md:w-20 lg:w-32 "
        src="https://i.ibb.co/hdmk9bn/cooker.png"
        alt=""
      />
      <h4>Electric Cooker</h4>
    </div>
  );
};

export default CategoryCard;

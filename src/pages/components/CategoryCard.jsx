import React from "react";

const CategoryCard = ({ category }) => {
  const { product_name, image } = category;
  return (
    <div className="border-2 hover:bg-black hover:text-white shadow-lg transition-all delay-100 md:p-3 md:px-1 lg:p-5 rounded-lg text-center border-red-500 font-bold text-sm md:text-md lg:text-lg p-2">
      <img className="mx-auto w-16 md:w-20 lg:w-20 " src={image} alt="" />
      <h4>{product_name}</h4>
    </div>
  );
};

export default CategoryCard;

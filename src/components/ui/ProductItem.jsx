import React from "react";
import { AiOutlinePlusCircle } from "react-icons/ai";

const ProductItem = ({ product }) => {
  return (
    <div className="relative bg-white flex flex-col gap-y-1 items-center text-center p-5">
      <button className="absolute top-0 right-0 text-purple-500 flex items-center justify-center hover:text-purple-700">
        <AiOutlinePlusCircle size={32}/>
      </button>
      <img src={product.image} alt={product.title} />
      <div className="text-sm font-semibold text-primary-brand-color">
        ₺{product.price}
      </div>
      <div className="text-sm font-bold text-gray-800">{product.title}</div>
      <div className="text-gray-500">{product.alt}</div>
    </div>
  );
};

export default ProductItem;

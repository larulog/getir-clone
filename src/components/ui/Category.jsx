import React from "react";

const Category = ({ category: { id, title, image } }) => {
  return (
    <a
      href="http://localhost:3000"
      className="flex flex-col items-center gap-y-2 justify-center p-4 group hover:bg-purple-200 transition-all"
    >
      <img
        src={image}
        alt={title}
        className="w-12 h-12 rounded border border-gray-300"
      />
      <span className="text-sm font-semibold text-gray-400 group-hover:text-purple-400">{title}</span>
    </a>
  );
};

export default Category;

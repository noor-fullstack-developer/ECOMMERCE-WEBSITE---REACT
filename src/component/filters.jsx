import React from "react";
import add from "/src/component/assets/add.svg";

const Filters = () => {
  return (
    <>
      <div className="m-5">
        <h2 className="text-xl">Filters</h2>
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_1px_0_rgba(0,0,0,0.25)] ">
          <p className="text-lg text-gray-800">Jewellery Types</p>
          <img src={add} alt="" /> 
        </div>
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_1px_0_rgba(0,0,0,0.25)] ">
          <p className="text-lg text-gray-800">Price Range</p>
          <img src={add} alt="" />
        </div>
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_1px_0_rgba(0,0,0,0.25)] ">
          <p className="text-lg text-gray-800">Metal Purity</p>
          <img src={add} alt="" />
        </div>
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_1px_0_rgba(0,0,0,0.25)] ">
          <p className="text-lg text-gray-800">Metal Weight</p>
          <img src={add} alt="" />
        </div>
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_1px_0_rgba(0,0,0,0.25)] ">
          <p className="text-lg text-gray-800">Carat Weight</p>
          <img src={add} alt="" />
        </div>
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_1px_0_rgba(0,0,0,0.25)] ">
          <p className="text-lg text-gray-800">Gemstone</p>
          <img src={add} alt="" />
        </div>
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_1px_0_rgba(0,0,0,0.25)] ">
          <p className="text-lg text-gray-800">Gemstone Shape</p>
          <img src={add} alt="" />
        </div>
        <div className="cursor-pointer flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_1px_0_rgba(0,0,0,0.25)] ">
          <p className="text-lg text-gray-800">Jewellery Styles</p>
          <img src={add} alt="" />
        </div>
      </div>
    </>
  );
};

export default Filters;

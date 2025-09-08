import React, { useState } from "react";
import detailIcon from "./assets/detail.svg";
import nonFavirateIcon from "./assets/non-fav.svg";
import FavirateIcon from "./assets/fav.svg";

const Cards = ({ products }) => {
  const [currentpage, setcurrentpage] = useState(1);
  const postperpage = 4;

  const lastPostIndex = currentpage * postperpage;
  const firstpageindx = lastPostIndex - postperpage;
  const currentpost = products.slice(firstpageindx, lastPostIndex);

  const totalPages = Math.ceil(products.length / postperpage);

  const handlePrev = () => {
    if (currentpage > 1) setcurrentpage(currentpage - 1);
    
  };

  const handleNext = () => {
    if (currentpage < totalPages) setcurrentpage(currentpage + 1);
  };

  return (
    <div className="flex justify-between items-center mt-5">
      <button
        onClick={handlePrev}
        disabled={currentpage === 1}
        className="px-4 h-10 py-0 bg-gradient-to-r from-red-200 to-indigo-200 rounded-3xl disabled:opacity-50"
      >
        {"<"}
      </button>
      <div className="grid grid-cols-4 gap-4">
        {currentpost.map((record) => (
          <div
            className="hover:shadow-gray-500 hover:shadow-lg p-5 gap-2.5 "
            key={record.id}
          >
            <div className="flex justify-end">
              <img
                src={FavirateIcon}
                alt="favorite"
                className="h-7"
                height="22"
                width="22"
              />
            </div>
            <img src={record.image} alt="items" height="300px" width="300px" />
            <br />

            <span className="font-normal underline text-sm">
              Amount: <span>₹ {record.price}</span>
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentpage === totalPages}
        className="px-4 h-10   py-0 bg-gradient-to-r from-indigo-200 to-red-200 rounded-3xl disabled:opacity-50"
      >
        {">"}
      </button>
    </div>
  );
};

export default Cards;

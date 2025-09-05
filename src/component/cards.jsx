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
    <>
      <div className="grid grid-cols-4 gap-4">
        {currentpost.map((record) => (
          <div
            className="hover:shadow-gray-500 shadow-lg gap-2.5 p-2 mt-4 ml-4"
            key={record.id}
          >
            <img src={record.image} alt="items" height="344px" width="344px" />
            <div className="flex justify-between">
              <img src={detailIcon} alt="detail" className="h-7" height="24" width="24" />
              <img src={FavirateIcon} alt="favorite" className="h-7" height="24" width="24" />
            </div>
            <br />
            <span className="text-sm text-gray-600">{record.description}</span>
            <br />
            <span className="font-normal underline text-sm">
              Amount: <span className="font-medium">₹ {record.price}</span>
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-6 gap-2">
        <button
          onClick={handlePrev}
          disabled={currentpage === 1}
          className="px-4 py-0 bg-gradient-to-r from-red-400 to-indigo-300 rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span className="rounded bg-gradient-to-r from-indigo-400 via-gray-100 to-indigo-400">
          Page {currentpage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentpage === totalPages}
          className="px-4 py-0 bg-gradient-to-l from-red-400 to-indigo-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Cards;

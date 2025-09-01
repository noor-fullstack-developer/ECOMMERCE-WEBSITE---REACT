import React, { useState } from "react";
import item from "./products.json";
import detailIcon from "./assets/detail.svg";
import FavirateIcon from "./assets/FavirateIcon.svg";

const Cards = () => {
  const [currentpage, setcurrentpage] = useState(1);
  const postperpage = 7;

  const lastPostIndex = currentpage * postperpage;
  const firstpageindx = lastPostIndex - postperpage;
  const currentpost = item.slice(firstpageindx, lastPostIndex);

  const totalPages = Math.ceil(item.length / postperpage);

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
            <img
              src={record.image}
              alt="items"
              height="344px"
              width="344px"
            />
            <div className="flex justify-between">
              <img
                src={detailIcon}
                alt="detail"
                className="h-7"
                height="24"
                width="24"
              />
              <img
                src={FavirateIcon}
                alt="favorite"
                className="h-7"
                height="24"
                width="24"
              />
            </div>
            <br />
            <span className="text-sm text-gray-600">
              {record.description}
            </span>
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
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Prev
        </button>
        <span>
          Page {currentpage} of {totalPages}
        </span>
        <button
          onClick={handleNext}
          disabled={currentpage === totalPages}
          className="px-3 py-1 border rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Cards;

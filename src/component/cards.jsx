import React from "react";
import item from "./products.json";
import detailIcon from "./assets/detail.svg";
import FavirateIcon from "./assets/FavirateIcon.svg";

const Cards = () =>{
  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {item.map((record) => {
          return (
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
          );
        })}
      </div>
    </>
  );
};

export default Cards;

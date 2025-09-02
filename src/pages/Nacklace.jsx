import { useState , useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import productsData from "../Data/products.json"
import Cards from "../component/cards";
import Filters from "../component/filters";
import Register from "../component/register";
import Cart from "./Cart";

function Nacklace() {
  const [Nacklace, setNacklace] = useState([]);

  useEffect(() => {
    // filter only rings
    const filtered = productsData.filter((p) => p.category === "Nacklace");
    setNacklace(filtered);
  }, []);

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-0 m-0 w-full ">
        <div className="flex align-middle mt-8 pt-4 pr-8 pl-8 pb-4 ">
          <div className="w-1/4">
            <Filters />
          </div>
          <div className="w-5/4">
            <div className="flex justify-between align-middle">
              <div className="flex align-middle">
                <span className="text-xl">2614 Custom Rings</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.5em"
                  color="#0019"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="10" stroke="currentColor"></circle>
                  <path
                    d="M9.5 9.5C9.5 8.11929 10.6193 7 12 7C13.3807 7 14.5 8.11929 14.5 9.5C14.5 10.3569 14.0689 11.1131 13.4117 11.5636C12.7283 12.0319 12 12.6716 12 13.5"
                    stroke="currentColor"
                  ></path>
                  <path d="M12.0001 17H12.009" stroke="currentColor"></path>
                </svg>
              </div>
              <div className="flex ">
                <span className="text-lg m-1">sort:</span>
                <select
                  className="pr-4 font-medium cursor-pointer focus:outline-0 text-sm"
                  name=""
                  id=""
                >
                  <option
                    value="price|asc"
                    className="bg-black rounded text-white"
                  >
                    Low-High price
                  </option>
                  <option
                    value="price|desc"
                    className="bg-black rounded text-white"
                  >
                    High-Low price
                  </option>
                </select>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-xl mb-4">{Nacklace.length} Nacklaces Found</h2>
              <Cards products={Nacklace} /> {/* ✅ Pass only Nacklace */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nacklace;

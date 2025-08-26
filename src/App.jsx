import callicon from "./assets/callicon.svg";
import poster from "./assets/poster.png";
import FavirateIcon from "./assets/FavirateIcon.svg";
import SearchIcon from "./assets/SearchIcon.svg";
import ShoppingbagIcon from "./assets/ShoppingbagIcon.svg";
import Usericon from "./assets/Usericon.svg";
import angara from "./assets/angara.svg";
import "./App.css";
import Product from "/src/product/product.jsx";

function App() {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white rounded-xl shadow-lg p-0 m-0 w-full ">
        <div className="bg-black text-white p-2 m-0 text-xs flex justify-center items-center">
          <p>Free Shipping | Free 15-Day Return</p>
        </div>
        <div className="flex-col justify-between items-center  pt-3 ml-10 mr-10 ">
          <div className="flex justify-between items-center mb-10">
            <div className="flex gap-2 items-center">
              <img src={callicon} alt="call" className="h-4 font-bold" />
              <a
                href="tel:+919001001313"
                className="text-xs font-bold text-gray-700"
              >
                +91-900-100-1313
              </a>
            </div>
            <div className="logo">
              <img
                src={angara}
                alt="logo"
                className="h-12"
                size="25vw"
                width="172"
                height="51"
              />
            </div>
            <div className="flex items-center gap-3 ">
              <div className="flex justify-center items-center overflow-hidden rounded-xl">
                <img
                  src={SearchIcon}
                  alt="search"
                  className="h-10 bg-gray-200 p-2 w-8"
                  height="24"
                  width="55"
                />
                <input
                  type="search"
                  className="bg-gray-200 rounded p-2 h-10 text-sm"
                  placeholder="Search..."
                />
              </div>
              <img
                src={Usericon}
                alt="user"
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
              <img
                src={ShoppingbagIcon}
                alt="bag"
                className="h-7"
                height="24"
                width="24"
              />
            </div>
          </div>
          <div className="flex justify-center p-1.5 mb-4">
            <ul className="flex items-center justify-evenly gap-20">
              <li className="cursor-pointer text-sm hover:underline hover:text-yellow-600">
                RINGS
              </li>
              <li className="cursor-pointer text-sm hover:underline hover:text-yellow-600">
                NECKLACES
              </li>
              <li className="cursor-pointer text-sm hover:underline hover:text-yellow-600">
                MANGALSUTRA
              </li>
              <li className="cursor-pointer text-sm hover:underline hover:text-yellow-600">
                EARRINGS
              </li>
              <li className="cursor-pointer text-sm hover:underline hover:text-yellow-600">
                BRACELETS
              </li>
              <li className="cursor-pointer text-sm hover:underline hover:text-yellow-600">
                GIFTS
              </li>
            </ul>
          </div>
        </div>
        <img src={poster} alt="poster" className="w-full h-[268px]" />
        <div className="a4 text-grayscale-700 font-normal truncate text-ellipsis bg-grayscale-300 px-4 py-3 tab:px-8 ">
          <a aria-label="Home" title="Home" className="" href="/in-en">
            Home
          </a>
          <small className="text-5xs mx-1">/</small>
          <a
            aria-label="Jewellery"
            title="Jewellery"
            className="capitalize"
            href="/in-en/c/jewellery"
          >
            Jewellery
          </a>
          <small className="text-5xs mx-1">/</small>
          <span className="text-clip">Rings</span>
        </div>
        <div className="flex flex-col justify-center items-center mb-5 shadow-gray-300 shadow-sm">
          <h1 className="text-2xl flex justify-center items-center">Rings</h1>
          <p className="flex justify-center items-center mt-4 text-gray-400">
            Drape a piece of luxury around your finger with handcrafted rings
            from Angara. Whether you're a fan o...
          </p>
          <div className="flex justify-center w-full mt-2">
            <button className="underline">Read More</button>
          </div>
        </div>
        <div className="flex">
          <div className="w-1/5">
            <div className="m-5">
              <h2 className="text-xl">Filters</h2>
              <div className="flex justify-between border-0  items-center gap-15 mt-3 mb-6  shadow-[0_2px_0_rgba(0,0,0,0.25)] ">
                <p className="text-lg text-gray-800">Jewellery Types</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                <p className="text-lg text-gray-800">Price Range</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                <p className="text-lg text-gray-800">Metal Purity</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                <p className="text-lg text-gray-800">Metal Weight</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                <p className="text-lg text-gray-800">Carat Weight</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                <p className="text-lg text-gray-800">Gemstone</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                <p className="text-lg text-gray-800">Gemstone Shape</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
              <div className="flex justify-between items-center gap-15 mt-3 mb-6 shadow-[0_2px_0_rgba(0,0,0,0.25)]">
                <p className="text-lg text-gray-800">Jewellery Styles</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="grey"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="">right</div>
        </div>
      </div>
    </div>
  );
}

export default App;

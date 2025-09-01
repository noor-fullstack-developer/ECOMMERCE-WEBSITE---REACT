import callicon from "./assets/callicon.svg";
import poster from "./assets/poster.webp";
import FavirateIcon from "./assets/FavirateIcon.svg";
import SearchIcon from "./assets/SearchIcon.svg";
import ShoppingbagIcon from "./assets/ShoppingbagIcon.svg";
import Usericon from "./assets/Usericon.svg";
import angara from "./assets/angara.svg";

const Navbar = () => {
  return (
    <>
      <div className="bg-black text-white p-2 m-0 text-xs flex justify-center items-center">
        <p>Free Shipping | Free 15-Day Return</p>
      </div>
      <div className="flex-col justify-between items-center  pt-3 ml-10 mr-10 ">
        <div className="flex justify-between items-center mb-10">
          <div className="flex gap-2 items-center">
            <img src={callicon} alt="call" className="h-4 font-bold" />
            <a
              href="tel:+919001001313"
              className="text-xs font-medium text-gray-700"
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
                className="h-10 bg-gray-100 p-2 w-8 focus:outline-0 focus:border-0"
                height="24"
                width="55"
              />
              <input
                type="search"
                className="bg-gray-100 rounded p-2 h-10 text-sm"
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
      <div className="text-grayscale-700 font-normal truncate text-ellipsis bg-grayscale-300 px-4 py-3 ">
        <span
          title="Home"
          className="flex text-[10px] pt-3 pb-3 pl-4 pr-4 bg-gray-50 rounded-2xl"
        >
          Home / Jewellery / Rings
        </span>
      </div>
      <div className="flex flex-col justify-center items-center mb-5 p-6 shadow-gray-300 shadow-sm pt-4 mt-4">
        <h1 className="text-2xl flex justify-center items-center">Rings</h1>
        <p className="flex justify-center items-center mt-4 text-gray-400">
          Drape a piece of luxury around your finger with handcrafted rings from
          Angara. Whether you're a fan o...
        </p>
        <div className="flex justify-center w-full mt-1 text-gray-600 pb-">
          <button className="underline text-sm  cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;

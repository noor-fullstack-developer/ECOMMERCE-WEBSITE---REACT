import callicon from "./assets/callicon.svg";
import poster from "./assets/poster.png";
import FavirateIcon from "./assets/FavirateIcon.svg";
import SearchIcon from "./assets/SearchIcon.svg";
import ShoppingbagIcon from "./assets/ShoppingbagIcon.svg";
import Usericon from "./assets/Usericon.svg";
import angara from "./assets/angara.svg";
import "./App.css";
import Product from '/src/product/product.jsx';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-3xl">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <img src={callicon} alt="call" className="h-5" />
            <a href="tel:+919001001313" className="text-sm text-gray-700">+91-900-100-1313</a>
          </div>
          <div className="logo">
            <img src={angara} alt="logo" className="h-10" />
          </div>
          <div className="flex items-center gap-3">
            <img src={SearchIcon} alt="search" className="h-7" />
            <input type="search" className="bg-gray-200 rounded px-2 h-7 text-sm" placeholder="Search..." />
            <img src={Usericon} alt="user" className="h-7" />
            <img src={FavirateIcon} alt="favorite" className="h-7" />
            <img src={ShoppingbagIcon} alt="bag" className="h-7" />
          </div>
        </div>
        <img src={poster} alt="poster" className="w-full rounded-lg mb-4" />
      </div>
    </div>
  );
}

export default App;

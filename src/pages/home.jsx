import React from "react";
import Register from "../component/register";
import poster from "../component/assets/poster.webp";

const Home = () => {
  return (
    <>
      <div className="flex flex-col items-center w-screen justify-center">
        <div>
          {/* <Register /> */}
          {/* Poster */}
          <img src={poster} alt="poster" className="w-full h-[268px]" />
        </div>
        <div className="flex flex-col m-2 items-center w-screen">
          <h1 className="m-5 text-2xl">Award & Accolades</h1>
          <div className="flex align-middle gap-20 justify-evenly w-screen">
            <img src="./src/assets/logo.webp" alt="inc 5000" />
            <img src="./src/assets/logo.webp" alt=" 5 year champ" />
            <img src="./src/assets/logo.webp" alt="costomer award" />
            <img src="./src/assets/logo.webp" alt="circle of Excellance" />
          </div>
          <div className="mt-5">
            <div className="flex justify-evenly items-center mb-2.5 gap-5 w-screen">
              <img
                src="./src/Data/img/ring-01.png"
                alt="Lab-Daimond-Jewllery"
                className="h-80 w-80"
              />
              <img
                src="./src/Data/img/ring-02.png"
                alt="Lab-Gemstone-Jewllery"
                className="h-80 w-80"
              />
              <img
                src="./src/Data/img/ring-03.png"
                alt="Natural-Daimond-Jewllery"
                className="h-80 w-80"
              />
            </div>
            <div className="flex gap-5 justify-evenly mt-2.5 items-center w-screen">
              <img
                src="./src/Data/img/ring-04.png"
                alt="Natural-Gemstone-Jewllery"
                className="h-80 w-80"
              />
              <img
                src="./src/Data/img/ring-05.png"
                alt="Pearl-Jewllery"
                className="h-80 w-80"
              />
              <img
                src="./src/Data/img/ring-06.png"
                alt="Mangalsutra"
                className="h-80 w-80"
              />
            </div>
          </div>
          <div classname="w-screen">
            <img src={poster} alt="poster" className="w-full h-[268px]" />
          </div>
          <h1 className="text-4xl text-gray-600 mt-4">Handcrafted To Meet Your Vision</h1>
          <h2 className="text-xl mt-4 text-gray-700">By Skilled Artisans & Craftsmen</h2>
          <span className="text-lg tracking-widest">with a life time acquired skills,our master Jewellers breathe life into these precious gemstones-just for you!</span>
          <h1 className="text-3xl font-semibold mt-10">Most Loved On Angara</h1>
          <div className="mt-6 mb-10">
            <p>here there will be 4 product shown</p>
          </div>
          <span className="text-3xl font-semibold">Gift That Say It All</span>
          <div className="mt-3">this will contain 6 product 1 for 3 and second for three </div>
          <span className="text-3xl mt-10 font-semibold">Forever Starts Here</span>
          <span></span>
        </div>
      </div>
    </>
  );
};

export default Home;

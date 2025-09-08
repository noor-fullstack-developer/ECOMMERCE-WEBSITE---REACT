import { useState, useEffect } from "react";
import productsData from "../Data/products.json";
import React from "react";
import Register from "../component/register";
import Gif1 from "../data/img.home/necklace.webp";
import Gif2 from "../data/img.home/earrings.webp";
import Gif3 from "../data/img.home/rings.webp";
import Gif4 from "../data/img.home/bracelets.webp";
import Gif5 from "../data/img.home/blue-sapphire-pendants.webp";
import Gif6 from "../data/img.home/necklaces.jpg";
import wedding from "../data/img.home/wedding.webp";
import engagement from "../data/img.home/engagement.webp";
import jan from "../data/img.home/january.jpg";
import feb from "../data/img.home/february.jpg";
import mar from "../data/img.home/march.jpg";
import apr from "../data/img.home/april.jpg";
import may from "../data/img.home/may.jpg";
import jun from "../data/img.home/june.jpg";
import jul from "../data/img.home/july.jpg";
import aug from "../data/img.home/august.jpg";
import sep from "../data/img.home/september.jpg";
import oct from "../data/img.home/october.jpg";
import nov from "../data/img.home/november.jpg";
import dec from "../data/img.home/december.jpg";
import green from "../data/img.home/green-ring.webp";
import purple from "../data/img.home/purple-ring.webp";
import ruby from "../data/img.home/ruby-ring.webp";
import trust1 from "../data/img.home/trust01.png";
import trust2 from "../data/img.home/trust02.png";
import trust3 from "../data/img.home/trust03.png";
import trust4 from "../data/img.home/trust04.png";
import trust5 from "../data/img.home/trust05.png";
import trust6 from "../data/img.home/trust06.png";
import trust7 from "../data/img.home/trust07.png";
import channel01 from "../Data/img.home/channel01.svg";
import channel02 from "../Data/img.home/channel02.svg";
import channel03 from "../Data/img.home/channel03.jpg";
import interveiw1 from "../Data/img.home/thumbnail01.webp";
import interveiw2 from "../Data/img.home/thumbnail02.webp";
import interveiw3 from "../Data/img.home/thumbnail03.webp";
import Review1 from "../Data/img.home/review01.webp";
import Review2 from "../Data/img.home/review02.webp";
import Review3 from "../Data/img.home/review03.webp";
// import Review4 from "../Data/img.home/review04.webp";
// import Review5 from "../Data/img.home/review05.webp";
// import Review6 from "../Data/img.home/review06.webp";
import Reviewr from "../Data/img.home/reviewrate.jpg";
import Imageslider from "../component/Imageslider.jsx";
import Cards from "../component/favcard.jsx";

const Home = () => {
  const [favorite, setfavorite] = useState([]);

  useEffect(() => {
    // filter only rings
    const filtered = productsData.filter((p) => p.categorie === "favorite");
    setfavorite(filtered);
  }, []);

  const [great, setgreat] = useState([]);

  useEffect(() => {
    // filter only rings
    const filtered = productsData.filter((p) => p.grade === "great");
    setgreat(filtered);
  }, []);

  return (
    <>
      <div className="flex flex-col items-center w-screen justify-center">
        {/* <div><Register /></div> */}
        <Imageslider />
        {/*this cointains the award  */}
        <div className="flex flex-col m-5 items-center w-screen">
          <h1 className="mt-5 text-2xl">Award & Accolades</h1>
          <div className="flex align-middle gap-15 justify-center w-screen px-20 mt-10">
            <img
              src="./src/Data/img.home/award-01.webp"
              className="h-[112px] w-[112px]"
              alt="inc 5000"
            />
            <img
              src="./src/Data/img.home/award-02.webp"
              className="h-[112px] w-[112px]"
              alt=" 5 year champ"
            />
            <img
              src="./src/Data/img.home/award-03.webp"
              className="h-[112px] w-[112px]"
              alt="costomer award"
            />
            <img
              src="./src/Data/img.home/award-07.webp"
              className="h-[112px] w-[112px]"
              alt="costomer award"
            />
            <img
              src="./src/Data/img.home/award-08.webp"
              className="h-[112px] w-[112px]"
              alt="costomer award"
            />
            <img
              src="./src/Data/img.home/award-04.webp"
              className="h-[112px] w-[112px]"
              alt="circle of Excellance"
            />
            <img
              src="./src/Data/img.home/award-05.webp"
              className="h-[112px] w-[112px]"
              alt="circle of Excellance"
            />
            <img
              src="./src/Data/img.home/award-06.webp"
              className="h-[112px] w-[112px]"
              alt="circle of Excellance"
            />
          </div>

          {/* This most type of items  */}
          <div className="mt-5">
            <div className="flex justify-center items-center mb-2.5 gap-5  ">
              <p className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/lab-biamond.webp"
                  alt="Lab-daimond Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Lab-Daimond Jewllery
              </p>
              <p className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/lab-gemstones.webp"
                  alt="Lab-gemstone Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Lab-Gemstone Jewllery
              </p>
              <p className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/natural-diamond.webp"
                  alt="Natural-daimond-Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Natural-Daimond Jewllery
              </p>
              <p className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/natural-gemstone.webp"
                  alt="Natural-gemstone-Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Natural-Gemstone Jewllery
              </p>
              <p className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/pearl-jewellery.webp"
                  alt="Pearl Jewllery"
                  className="h-[202px] w-[202PX] "
                />
                Pearl Jewllery
              </p>
              <p className="flex flex-col items-center  text-gray-600">
                <img
                  src="./src/Data/img.home/mangalsutra-banner.webp"
                  alt="Mangalsutra"
                  className="h-[202px] w-[202PX] "
                />
                Mangalsutra
              </p>
            </div>
          </div>

          {/* This cointain side and video of home */}
          <div className=" flex align-middle  mt-20 items-center ">
            <div className="w-2/4">
              <video
                autoPlay
                muted
                loop
                src="./src/Data/videos/home-vid.mp4"
              ></video>
            </div>
            <div className="bg-gray-200 flex flex-col w-2/4 items-center p-17   ">
              <h1 className="text-3xl text-gray-600 mt-4">
                Handcrafted To Meet Your Vision
              </h1>
              <h2 className="text-xl mt-4 text-gray-600">
                By Skilled Artisans & Craftsmen
              </h2>
              <span className="text-lg tracking-widest">
                with a life time acquired skills,our master Jewellers breathe
                life into these precious gemstones-just for you!
              </span>
            </div>
          </div>

          {/* This cointains the Loved items  */}
          <h1 className="text-3xl font-semibold mt-10">Most Loved On Angara</h1>
          <div className="mt-6 mb-10">
            <Cards products={favorite} />
          </div>

          {/* this contains the gift */}
          <span className="text-2xl tracking-wider font-semibold my-10 ">
            Gift That Say It All
          </span>
          <div className="my-10 flex justify-center align-middle items-center gap-5 ">
            <p
              className="flex flex-col items-center text-gray-600 text-lg
            h-50 "
            >
              <img src={Gif1} alt="" className="h-50 hover:scale-90 " />
              below 25,000
            </p>
            <p className="flex flex-col items-center text-gray-600 text-lg h-50">
              <img src={Gif2} alt="" className="h-50 hover:scale-90 " />
              25,000 - 50,000
            </p>
            <p className="flex flex-col items-center text-gray-600 text-lg h-50">
              <img src={Gif3} alt="" className="h-50 hover:scale-90 " />
              50,000 - 1,00,000
            </p>
            <p className="flex flex-col items-center text-gray-600 text-lg h-50">
              <img src={Gif4} alt="" className="h-50 hover:scale-90 " />
              Above 1,00,000
            </p>
            <p className="flex flex-col items-center text-gray-600 text-lg h-50">
              <img src={Gif5} alt="" className="h-50 hover:scale-90 " />
              Birthday Gifts
            </p>
            <p className="flex flex-col items-center text-gray-600 text-lg h-50">
              <img src={Gif6} alt="" className="h-50 hover:scale-90 " />
              Anniversary Gifts
            </p>
          </div>
          {/* this is for occassion */}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10">
            Forever Starts Here
          </span>
          <div className="flex justify-around gap-5 items-center">
            <p className="flex flex-col gap-3 text-gray-600 text-xl items-center">
              <img src={wedding} alt="" className="h-140" /> Wedding Jewellery
            </p>
            <p className="flex flex-col gap-3 text-gray-600 text-xl items-center">
              <img src={engagement} alt="" className="h-140" />
              Wedding Jewellery
            </p>
          </div>
          {/*this is for birth option */}
          <span className="text-2xl tracking-wider font-semibold my-10 ">
            Make Birthdays More Colourful
          </span>
          <div className="flex justify-evenly align-middle items-center">
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={jan} alt="" />
              January
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={feb} alt="" />
              February
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={mar} alt="" />
              March
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={apr} alt="" />
              April
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={may} alt="" />
              May
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={jun} alt="" />
              June
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={jul} alt="" />
              July
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={aug} alt="" />
              August
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={sep} alt="" />
              September
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={oct} alt="" />
              October
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={nov} alt="" />
              November
            </p>
            <p className="flex flex-col items-center hover:underline decoration-orange-400  hover:scale-110 ">
              <img src={dec} alt="" />
              December
            </p>
          </div>
          {/*Best items of creator */}
          <span className="text-2xl tracking-wider font-semibold my-10 ">
            Curated by Our Master Jewellers
          </span>
          <div className="flex justify-around gap-5 items-center">
            <p className="flex flex-col gap-3 text-gray-600 text-xl items-center ">
              <img src={green} alt="" />
              Emrald Jewellery
            </p>
            <p className="flex flex-col gap-3 text-gray-600 text-xl items-center ">
              <img src={purple} alt="" />
              Gardens At Twillight Collection
            </p>
            <p className="flex flex-col gap-3 text-gray-600 text-xl items-center ">
              <img src={ruby} alt="" />
              Ruby Ring
            </p>
          </div>
          {/* This is angara trusts side */}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10 ">
            The Angara Trust Journey
          </span>
          <div className="flex justify-around gap-24 items-center">
            <p className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust1} className="h-24 w-24 " alt="" />
              USA's #1 online Jeweller
            </p>
            <p className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust2} className="h-24 w-24 " alt="" />
              BIS HallMark
            </p>
            <p className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust3} className="h-24 w-24 " alt="" />
              Angara Certified
            </p>
            <p className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust4} className="h-24 w-24 " alt="" />
              Rated 4.7/5 Globally
            </p>
            <p className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust5} className="h-24 w-24 " alt="" />
              15 Days Returns
            </p>
            <p className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust6} className="h-24 w-24 " alt="" />
              lifetime Exchange & buy back
            </p>
            <p className="flex flex-col gap-5 text-gray-600 text-xs font-medium mt-5 items-center">
              <img src={trust7} className="h-24 w-24 " alt="" />
              Ethical Source{" "}
            </p>
          </div>
          {/* this is angara interview */}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10">
            Featured In
          </span>
          <div className="flex justify-around gap-10 items-center ">
            <p className="flex flex-col gap-2 items-start w-110 text-xs">
              <a href="https://www.youtube.com/watch?v=OjUJhIkXBhw">
                <img
                  src={interveiw1}
                  className="h-90 cursor-pointer w-100"
                  alt="interview"
                />
              </a>
              <img src={channel01} className="h-10" alt="channel-logo" />
              How did a spark of tradition, a meeting with Ratan Tata, and a
              love for coloured gemstones shape Angara into a $100M global
              brand? Watch Ankur & Aditi Daga...
              <button className="underline mt-6 w-full cursor-pointer text-sm tracking-wider font-semibold">
                Watch Out
              </button>
            </p>
            <p className="flex flex-col gap-2 items-start w-110 text-xs">
              <a href="youtube.com/watch?v=_Xx0hxNuug8&embeds_referring_euri=https%3A%2F%2Fwww.angara.com%2Fin-en&source_ve_path=MjM4NTE">
                <img
                  src={interveiw2}
                  className="h-90 cursor-pointer w-100"
                  alt="interview"
                />
              </a>
              <img src={channel02} className="h-9" alt="channel-logo" />
              Coloured gemstones embody cultural significance and carry deeper
              meaning. Angara is bringing back this segment of the jewellery
              industry with...
              <button className="underline mt-6 w-full cursor-pointer text-sm tracking-wider font-semibold">
                Watch Out
              </button>
            </p>
            <p className="flex flex-col gap-2 items-start w-110 text-xs">
              <a href="youtube.com/watch?v=18XiqLpjuDM&embeds_referring_euri=https%3A%2F%2Fwww.angara.com%2Fin-en&source_ve_path=MjM4NTE">
                <img
                  src={interveiw3}
                  className="h-90 cursor-pointer w-100"
                  alt="interview"
                />
              </a>
              <img src={channel03} className="h-7" alt="channel-logo" />A couple
              from Jaipur quietly built one of America's most trusted diamond
              jewellery brands
              <button className="underline mt-6 w-full  cursor-pointer text-sm tracking-wider font-semibold ">
                Watch Out
              </button>
            </p>
          </div>
          {/*Reviews of clients */}
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10">
            Your Words, Not Ours
          </span>
          <div className=" flex items-start gap-5 justify-around ">
            <p className="flex w-120  h-120 flex-col gap-3 text-gray-600 text-lg items-center bg-gray-50 p-15">
              <img src={Review1} className="h-29 w-29" alt="review-img" />
              Absolutly beautiful...{" "}
              <img src={Reviewr} className="h-12" alt="rates" />I was given this
              ring in yellow gold by my husband today for my birthday.and it...{" "}
              <p className="font-semibold">Rebecca D.</p>{" "}
            </p>
            <p className="flex w-120  h-120 flex-col gap-3 text-gray-600 text-lg items-center bg-gray-50 p-15">
              <img src={Review2} className="h-29 w-29" alt="review-img" />
              Emrald Necklace...{" "}
              <img src={Reviewr} className="h-12" alt="rates" />
              Got this for my girlfriend for her birthday and it's absolutely
              beautiful. She I... <p className="font-semibold">
                Zackary C.
              </p>{" "}
            </p>
            <p className="flex w-120  h-120 flex-col gap-3 text-gray-600 text-lg items-center bg-gray-50 p-15">
              <img src={Review3} className="h-29 w-29" alt="review-img" />
              Exquisite gift for my granddaughter's 18th birthday..{" "}
              <img src={Reviewr} className="h-12" alt="rates" />
              The Fresh pearl is absolutely beautiful,flawless and has a
              beautiful sheen... <p className="font-semibold">Nancy J.</p>{" "}
            </p>
          </div>
          <span className="text-2xl tracking-wider font-semibold mt-20 my-10">
            Need a Second Look?
          </span>
          <div className="flex justify-around items-center align-middle">
            <p>
              <div className="mt-6 mb-10">
                <Cards products={great} />
              </div>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

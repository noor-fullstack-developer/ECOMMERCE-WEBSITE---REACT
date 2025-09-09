import Meta from "./assets/meta.svg";
import twitter from "./assets/twitter.svg";
import youtube from "./assets/youtube.svg";
import pinterest from "./assets/pinterest.svg";
import instagram from "./assets/instagram.svg";
import phone from "./assets/callIcon.svg"
import email from "./assets/email.svg"
import mg from "./assets/mg.svg"
import location from "./assets/location.svg"

const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="text-xl font-semibold mb-2">
          Get <span className="text-amber-500 font-bold text-xl">5% off</span>{" "}
          on your first order
        </div>
        <div className="border-1 rounded mb-2">
          <input
            type="number"
            placeholder="+91 Phone Number*"
            className="p-4 pr-50"
          />
          <button className="bg-black text-white p-4">Sign Up</button>
        </div>
        <div className="text-gray-700">
          Your privacy matters. For detail, see our{" "}
          <span className="underline cursor-pointer">Privacy Policy.</span>
        </div>
        <div className="flex m-5">
          <p className="text-[17px] pr-2">follow us :</p>
          <a href="meta.com">
            <img src={Meta} alt="meta" className="pr-3 h-6" />
          </a>
          <a href="twitter.com">
            <img src={twitter} alt="twitter" className="pr-3 h-6" />
          </a>
          <a href="youtube.com">
            <img src={youtube} alt=" youtube" className="pr-3 h-6" />
          </a>
          <a href="pinterest.com">
            <img src={pinterest} alt="p interest" className="pr-3 h-6" />
          </a>
          <a href="instagram.com">
            <img src={instagram} alt="instagram" className="pr-3 h-6" />
          </a>
        </div>
        <div className="flex justify-between py-15 px-70 items-start align-middle w-screen bg-[#f5f5f6]">
          <div >
            <span className="font-semibold text-lg text-black">Assistance</span>
            <ul>
              <li>15-days Returns</li>
              <li>Resizing Policy</li>
              <li>Lifetime Exchange Buy back</li>
              <li>Cancellation Policy</li>
              <li>Track Your Order</li>
              <li>FAQs</li>
              <li className="hover:underline mt-2 gap-1 font-light flex"><img src={phone} className="h-5" />+91-900-100-1313</li>
              <li className="hover:underline mt-2 gap-1 font-light flex"><img src={email} className="h-5" />Email Us</li>
              <li className="hover:underline mt-2 gap-1 font-light flex"><img src={mg} className="h-5" />Chat on WhatsApp</li>
              <li className="hover:underline mt-2 gap-1 font-light flex"><img src={location} className="h-5" />Angara Jewels Pvt.Ltd. <br/>2nd Floor,A-28,Vidyalaya <br /> Marg,Tilak Nagar,Jaipur-302004</li>
                
            </ul>
          </div>
          <div>
            <span className="font-semibold text-lg text-black">ABOUT US</span>
            <ul>
              <li>Our Story</li>
              <li>Angara Blog</li>
              <li>Angara In The Press</li>
            </ul>
            <span className="font-semibold text-lg text-black">
              CERTIFICATES
            </span>
            <ul>
              <li>BIS Hallmarking</li>
              <li>IGI Certificate</li>
              <li>SGL Certificate</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-lg text-black">
              EXPERIENCE ANGARA
            </span>
            <ul>
              <li>The Angara Difference</li>
              <li>Free Shipping</li>
              <li>Payment Options</li>
              <li>Gold Rate</li>
            </ul>
          </div>
          <div>
            <span className="font-semibold text-lg text-black">SHOP</span>
            <ul>
              <li>Daimond Rings</li>
              <li>Lab Grown Emerald Rings</li>
              <li>Lab GrownBlue Sapphire Rings</li>
              <li>Blue sapphire Pandents</li>
              <li>Lab Grown Daimond Jewellery</li>
              <li>Amethyst Jewellery</li>
              <li>Aquamarine Jewellery</li>
              <li>Engagement Rings</li>
              <li>Initials Pendants</li>
              <li>Birthstone Jewellery</li>
              <li>Hoop Earrings</li>
              <li>Solitaire Rings</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;

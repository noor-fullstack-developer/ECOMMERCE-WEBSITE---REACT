import bg from "./assets/reg-bg.jpg";
import ring from "./assets/hidden.png";
import ring1 from "./assets/hidden1.png";
import angara from "./assets/angara.svg";
import "./all.css";

const Register = () => {
    const alt = () => {
        button.classlist.add("hidden")
    }
  return (
    <>
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className=" bg-no-repeat bg-cover flex justify-evenly align-middle fixed left-[25%] top-[25%] bottom-[35%] right-[25%] overflow-hidden rounded-2xl"
      >
        <div>
          <img src={ring} alt="" width={240} />
          <img src={ring1} alt="" width={240} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <h2 className="font-bold text-sm">Welcome To</h2>
          <img src={angara} alt="" className="h-12" />
          <span className="text-gray-500 font-medium text-sm">
            Get 5% additional discount on your first order
          </span>
          <input
            type="tel"
            placeholder="+91 | Enter your mobile number*"
            className="border-[1px] w-md border-gray-400 rounded p-2 pr-10 mt-5"
          />
          <button
            onClick={alt}
            type="submit"
            value="submit"
            className="bg-gray-200 mt-5 rounded p-2 pr-47 pl-47"
          >
            Continue
          </button>
          <span className="mt-5 text-sm text-gray-500">
            By Continuing,I agree to{" "}
            <span className="text-black underline">T&C</span> &{" "}
            <span className="text-black underline">Privacy Policy</span>
          </span>
          <div className="flex justify-center items-center gap-2 mt-5">
            <input type="checkbox" name="" id="" />
            <label htmlFor="checkbox" className="text-gray-500">
              Subscribe for exclusive offers from Angara{" "}
            </label>
          </div>
        </div>
      </div>
    </>
  );
};



export default Register;

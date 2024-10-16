import { FaPhoneVolume, FaLocationDot } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";
import {
  FaTelegramPlane,
  FaTwitter,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

function App() {
  return (
    <>
      <div className="flex w-full min-h-screen justify-center items-center">
        <div className="flex flex-col md:flex-row md:space-x-6  space-y-6 md:space-y-0 last:bg-cyan-700 w-full max-w-4xl p-8 sm:p-12 rounded-xl shadow-lg text-white">
          <div className="flex flex-col space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-sm text-justify text-cyan-100">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Repellendus esse, vitae ex aliquam accusantium ullam blanditiis,
              </p>
            </div>
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center space-x-2">
                <FaPhoneVolume className="text-xl text-teal-300" />
                <span>+(9764354143)</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <IoMdMailUnread className="text-xl text-teal-300" />
                <span>saurabhsutar0606@gmail.com</span>
              </div>
              <div className="inline-flex items-center space-x-2">
                <FaLocationDot className="text-xl text-teal-300" />
                <span>At Shengaon , Near by Jotiba Tempale.</span>
              </div>
            </div>
            <div className="flex space-x-4 text-lg">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaTelegramPlane />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 text-teal-600 md:w-84 ">
            <form action="#" className=" flex flex-col space-y-4">
              <div className="space-y-2">
                <label htmlFor="" className=" font-bold">
                  Your name :
                </label>
                <input
                  type="text"
                  placeholder="Your Name..."
                  className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 "
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="" className=" font-bold">
                  Email Address :
                </label>
                <input
                  type="email"
                  placeholder="Your Email..."
                  className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 "
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="" className=" font-bold">
                  Message :
                </label>
                <textarea
                  rows={3}
                  placeholder="Your Message..."
                  className=" ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-teal-300 "
                />
              </div>
              <button className="inline-block self-end bg-cyan-700 text-white text-sm uppercase  font-bold px-6 py-2 tracking-wide rounded-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { IoIosSend } from "react-icons/io";
import EmailHi from "../../assets/animation/email.gif";
import { MdEmail } from "react-icons/md";
const SandMail = () => {
  return (
    <div className="w-11/12 mx-auto">
      <h3 className="text-center text-3xl font-bold my-10">
        {" "}
        <MdEmail className="inline-block text-red-600 text-6xl" /> Send Mail
      </h3>
      <div className="flex justify-between gap-10 items-center">
        <div className="w-full">
          <img className="w-full" src={EmailHi} alt="" />
        </div>

        <div className="w-10/12">
          <form action="">
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-2  border-red-500 "
              type="text"
              name="name"
              placeholder="Your Name*"
              required
            />
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-2  border-red-500 "
              type="email"
              name="email"
              placeholder="Your Email"
            />
            <input
              className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-2  border-red-500 "
              type="text"
              name="contact"
              placeholder="Contact Info"
            />
            <textarea
              className="w-full outline-none border-2 rounded ps-2 py-2 bg-red-50 my-2  border-red-500 "
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Your Message"
            ></textarea>
            <button
              type="submit"
              style={{ background: "red" }}
              className="btn rounded border-0 shadow-red-500 shadow-md"
            >
              <IoIosSend className="text-xl" />{" "}
              <input type="submit" value="Send Message" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SandMail;

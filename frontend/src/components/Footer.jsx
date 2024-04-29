import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center bg-slate-800  text-white">
      <div className="logo text-2xl font-bold text-white">
        <span className="text-green-500"> &lt;</span>
        {/* <span>Pass</span><span className='text-green-500'>OP/&gt;</span> */}
        <span>Password </span>
        <span className="text-green-500">Manager/&gt;</span>
      </div>
      <div className="flex items-center justify-center">
        {" "}
        Created with <img
          className="mx-2 w-7"
          src="icons/heart.png"
          alt=""
        />{" "}
        by Alok Raj{" "}
      </div>
    </div>
  );
};

export default Footer;

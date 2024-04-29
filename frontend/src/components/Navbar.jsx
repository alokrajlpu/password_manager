import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-slate-800 text-white ">
      <div className="mycontainer flex h-14 items-center justify-between px-4 py-5">
        <div className="logo text-2xl font-bold text-white">
          <span className="text-green-500"> &lt;</span>
          {/* <span>Pass</span><span className='text-green-500'>OP/&gt;</span> */}
          <span>Password </span>
          <span className="text-green-500">Manager/&gt;</span>
        </div>
        <ul>
          <li className="flex gap-4 ">
            <a className="hover:font-bold" href="/Home">
              Home
            </a>
            <a className="hover:font-bold" href="/">
              Sign Out
            </a>
            <a className="hover:font-bold" href="/about">
              about
            </a>
            {/* <a className='hover:font-bold' href='/ContactUs'>Contact Us</a> */}
          </li>
        </ul>
        <button className="mx-2 my-5 flex items-center justify-between rounded-full  bg-green-700 text-white ring-1 ring-white">
          <a href="" target="_blank">
            <img
              className="w-10  p-1 invert"
              src="/icons/github.svg"
              alt="github logo"
            />
          </a>
          <span className="px-2 font-bold">GitHub</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

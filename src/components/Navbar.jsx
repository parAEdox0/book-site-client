import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar h-[13vh] px-16 flex items-center justify-between bg-white text-blue-400 mb-[3vh] rounded-xl">
      <div className="flex gap-[40px] items-center">
        <img src="../images/logo.jpg" className="h-[10vh]" alt="book_logo" />
        <p className="font-cursive text-5xl font-bold text-[#eb6344]">
          Books Gallery
        </p>
      </div>
      <div className="flex gap-11 items-center">
        <Link to={"/"}>
          <div className="flex  gap-2 text-zinc-600 cursor-pointer hover:text-orange-500">
            <i className="fa-solid text-lg fa-house"></i>
            <p className="text-lg font-semibold">Home</p>
          </div>
        </Link>
        <Link to={"/add"}>
          <div className="flex items-center gap-2 p-2  rounded-md text-zinc-600 hover:text-orange-500 bg-transparent cursor-pointer ">
            <i className="fa-solid fa-plus text-lg rounded-full"></i>
            <p className="text-lg  font-semibold">Add a book</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

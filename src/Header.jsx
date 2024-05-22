import React from 'react'
import { FaCartPlus } from "react-icons/fa";

const Header = ({size,setShow}) => {
  return (
    <div className="h-12 bg-slate-500 text-white flex justify-end items-center ">
      <FaCartPlus onClick={()=>setShow(false)} className=" text-2xl" />
      <span className=" bg-red-600 rounded-full  text-white ">{size}</span>
    </div>
  );
}

export default Header
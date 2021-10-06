import React from "react";
import { Link } from "react-router-dom";
import logo from "../../baezeni.jpg";


export default function SideBar({nav}) {
    return (
      <>
        <div className="fixed w-32 h-screen " style={nav}>
          <ul className=" py-2 ">
            <li className="flex justify-center mb-10">
        <img src={logo} className="mx-5 w-32 h-16 rounded-2xl" />

            </li>
            <li className="text-md font-semibold text-center hover:bg-gray-100 py-3">
              <Link to="/">USER</Link>
            </li>
            <li className="text-md font-semibold text-center hover:bg-gray-100 py-3">
              <Link to="/photo">PHOTO</Link>
            </li>
          </ul>
        </div>
      </>
    );
  };

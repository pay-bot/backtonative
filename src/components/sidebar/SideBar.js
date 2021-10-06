import React from "react";
import { Link } from "react-router-dom";

export default function SideBar({nav}) {
    return (
      <>
        <div className="fixed w-32 h-screen " style={nav}>
          <ul className="py-10 ">
            <li className="flex justify-center mb-10">
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

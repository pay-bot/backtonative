import React, { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import SideBar from "../components/sidebar/SideBar";

export default function Layouts({children}) {
  const [navcolor, setNavColor] = useState({
    backgroundColor: "aquamarine",
  });

  const changeNav = () => {
    
  }
  return (
    <>
      <div className="">
        <div className="">
          <Navbar onClick={changeNav} />
          <SideBar nav={navcolor} />
        </div>
        <main className="w-screen h-full items-center justify-center p-20 flex">
          {children}
        </main>
      </div>
    </>
  );
}

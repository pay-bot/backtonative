import React from 'react'
import Navbar from '../components/navbar/Navbar'
import SideBar from '../components/sidebar/SideBar'

export default function Layouts(props) {
    
    return (
        <>
        <div className="overflow-x-hidden">
            <div className="">
            <Navbar />
            <SideBar />
            </div>
            <main className="w-full h-full items-center justify-center ml-28 mt-10 flex">{props.children}</main>
            </div>
        </>
    )
}

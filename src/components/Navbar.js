import React from 'react'
import logo from '../baezeni.jpg'
export default function Navbar() {
    return (
        <>
        <div className="nav">
           <div className="navbar">
               <img src={logo} width="200px" height="75px" />
               <h3 className>Jakarta, Indonesia</h3>
               <div className="language">
                   <select>
                   <option value="en">English</option>
					<option value="id">Indonesian</option>
                   </select>
               </div>
               </div> 
               </div>
        </>
    )
}

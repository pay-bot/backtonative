import React from 'react'
import "./Home.module.css"
import {Link} from 'react-router-dom'
export default function SideBar() {
    return (
        <>
            <ul className="sidebar">
                <li className="bar"><Link to="/">USER</Link></li>
                <li className="bar"><Link to="/photo">Photo</Link></li>
            </ul>
        </>
    )
}

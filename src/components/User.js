import React, {useState, useEffect} from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';

export default function User() {
    const [users, setUsers] = useState([])
    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/users")
       .then(response => response.json())
       .then(data => setUsers(data))
       .catch(err => console.log(err))
     },[]);
   return (
       <>
       <div className="pages">
           <div className="">
       <Navbar/>
       <SideBar/>
       </div>
       <div className="user-container">
           {users.map((user) => (
               <div className="user-card">
           <h2 className="">{user.name}</h2>
           </div>
           ))}
       </div>
       </div>
       </>
     )
   };
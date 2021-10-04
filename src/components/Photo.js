import axios from "axios";
import React, {useState, useEffect} from 'react'
import Navbar from "./Navbar";
import SideBar from "./SideBar";



export default function App() {
    const [photos, setPhotos] = useState([])
    useEffect(()=>{
       fetch("https://jsonplaceholder.typicode.com/photos/?_limit=10")
       .then(response => response.json())
       .then(data => setPhotos(data))
       .catch(err => console.log(err))
     },[]);
   return (
       <>
       <div className="pages">
       <div className="">

       <Navbar />
       <SideBar />
       </div>
       <div className="container">
           {photos.map((photo) => (
               <div key={photo.id} className="">

                   <img src={photo.thumbnailUrl} />
               </div>
               ))}
       </div>
       </div>
       </>
     )
   };
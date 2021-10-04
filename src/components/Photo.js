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
       <div className="">
       <div className="">

       <Navbar />
       </div>
       <div className="page-container">
       <SideBar />
           {photos.map((photo) => (
               <div key={photo.id} className="photo-card">
                 <div className="grid-item">
                   <div className="">
                 <img src={photo.thumbnailUrl} width="200px" />
                   <h2>{photo.title}</h2>
                   </div>
                 </div>
                   
               </div>
               ))}
       </div>
       </div>
       </>
     )
   };
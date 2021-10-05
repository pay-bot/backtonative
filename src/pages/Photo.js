import React, { useState, useEffect } from "react";

export default function App() {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos/?_limit=10")
      .then((response) => response.json())
      .then((data) => setPhotos(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
        
          <div className="md:w-9/12 mx-auto justify-center flex gap-5 grid grid-cols-4">
            {photos.map((photo) => (
              <div key={photo.id} className="">
                  <div className="w-44 h-72 mx-2 p-2 bg-gray-100">
                    <img src={photo.thumbnailUrl} className="w-44 h-44 rounded" />
                    <div className="flex text-center justify-center items-center bottom-0">
                      <p className="flex text-center justify-center items-center bottom-0">{photo.title}</p></div>
                </div>
              </div>
            ))}
          </div>
    </>
  );
}

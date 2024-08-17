import React from 'react'
import { useNavigate } from 'react-router-dom';

const UiUnderConstruction = () => {
    const navigate = useNavigate()
    return (
        <div className="flex items-center justify-center h-[80vh]">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-pink-500 mb-4 sm:text-4xl">
              Page Under Construction
            </h1>
            <p className="text-xl text-gray-300">
              We are working hard to bring you this page soon. Stay tuned!
            </p>
            <button className="text-xl text-red-500" onClick={()=>navigate("/")}>
              HomePage
            </button>
          </div>
        </div>
      );
}

export default UiUnderConstruction
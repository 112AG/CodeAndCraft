import React from 'react'
import { projectImages } from "../data/homeData";
import { Link } from 'react-router-dom';

function ClientsProjects() {
  return (
<div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            {Object.entries(projectImages).map(([key, img]) => (
              <div
                key={key}
                className="bg-white w-full hover:scale-105 transition ease-in  sm:w-[334px] rounded-lg shadow-md p-2 flex flex-col items-center"
              >
                <img
                  src={img}
                  alt={key + " project"}
                  className="w-full h-40 object-cover rounded mb-3"
                />
                <span className="text-gray-700 font-medium capitalize">
                  {key.replace(/([A-Z])/g, " $1")}
                </span>
              </div>
            ))}
          </div>
          <Link to='/projects' className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all active:scale-95 focus:scale-95">
            View All Portfolios
          </Link>
        </div>  )
}

export default ClientsProjects
import React from 'react'
import { services } from "../data/homeData";

function WhatweDo() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="bg-white border border-gray-100 rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="h-16 w-16 mb-3 flex items-center justify-center bg-gray-50 rounded-full shadow shadow-gray-600 overflow-hidden">
                <img
                  src={service.icon}
                  alt={service.title + " icon"}
                  className="h-10 w-10 object-contain"
                />
              </div>
              <h3 className="text-xl text-blue-600 font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
  )
}

export default WhatweDo
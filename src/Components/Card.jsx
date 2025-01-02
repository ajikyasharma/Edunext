import React from "react";

export default function Card({ title, description, image }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg border border-black hover:border-blue-600">
        <div className="flex items-center ">
            <img src={image} className="mr-4" />
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        </div>
    
      <p className="text-gray-600">{description}</p>
      <a href="#" className="text-blue-600 mt-4 block hover:underline">
        Read More →
      </a>
    </div>
  );
}

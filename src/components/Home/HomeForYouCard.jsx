import React from "react";
import { Link } from "react-router-dom";

export default function HomeForYouCard({ id, image, name, desc, tags }) {
  return (
    <div className="w-64 h-[370px] m-auto overflow-hidden shadow-lg rounded-2xl h-90">
      <div className="h-[140px]">
        <Link to={"/playlist/" + id}>
          <img alt="eggs" src={image} className="rounded-t-lg object-contain" />
        </Link>
      </div>
      <div className="relative w-full p-4 bg-white h-full">
        <Link to={"/playlist/" + id}>
          <p className="mb-2 text-xl font-medium text-gray-800">{name}</p>
        </Link>
        <p className="text-xs text-gray-600">{desc}</p>
        <div className="flex flex-wrap items-center mt-6 justify-starts">
          {tags.map((tag, index) => (
            <div key={index} className="text-xs mb-2 mr-2 py-1.5 px-4 text-gray-600 bg-purple-200 rounded-2xl">
              #{tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

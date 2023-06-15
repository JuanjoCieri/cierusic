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
        <button
          aria-label="Go to article"
          type="button"
          className="absolute w-12 h-12 text-white bg-fuchsia-800 rounded-full right-8 -top-6 pl-[10px]"
        >
          <svg width="25" height="25" fill="currentColor" viewBox="0 0 20 20">
            <g fill="none">
                <path
                d="M17.222 8.685a1.5 1.5 0 0 1 0 2.628l-10 5.498A1.5 1.5 0 0 1 5 15.496V4.502a1.5 1.5 0 0 1 2.223-1.314l10 5.497z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </button>
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

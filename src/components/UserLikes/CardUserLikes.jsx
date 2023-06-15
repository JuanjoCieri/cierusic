import React from "react";

export default function CardUserLikes({ image, artist, name }) {
  return (
    <div className="w-48 h-64">
      <div className="h-48 w-48">
        <img src={image} className="w-48 h-48 object-contain" />
      </div>
      <div className="h-16 flex flex-col gap-1 py-2">
        <p className="text-[15px] font-semibold text-fuchsia-800 truncate ...">
          {name}
        </p>
        <p className="text-[14px]">{artist}</p>
      </div>
    </div>
  );
}

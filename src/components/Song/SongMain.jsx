import React from "react";
import Likes from "../../utils/likes/Likes";
import Play from "../../utils/play/Play";

export default function SongMain({
  image,
  name,
  artist,
  likes,
  date,
  songId,
  song,
}) {
  return (
    <main className="w-screen flex flex-col justify-center items-center mt-16 mb-16 overflow-x-hidden">
      <section className="w-screen flex flex-col justify-center items-center">
        <div className="w-full h-52 flex justify-center items-center">
          <img src={image} className="h-52 w-full object-cover blur-sm" />
          <img src={image} className="w-52 absolute border" />
        </div>
        <div className="mt-6 px-4 lg:px-10 w-full flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-start gap-2">
            <h2 className="text-5xl font-extrabold text-slate-800">{name}</h2>
            <p className="text-slate-800">by {artist}</p>
            <Play songId={songId} />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col   justify-end items-end gap-2">
            {/* <p className="text-slate-800">Subida el {date}</p> */}
            <p className="text-slate-800">
              {likes?.length} {likes?.length === 1 ? "like" : "likes"}
            </p>
            <button>
              <Likes songId={songId} />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from "react";
import NavBar from "../Navbar/Navbar";
import HomeForYouCard from "./HomeForYouCard";
import { useSelector } from "react-redux";
import HomeDiscover from "./HomeDiscover";
import HomeNews from "./HomeNews";
import Footer from "./Footer";

export default function Home() {

  const forYouPlaylist = useSelector((state) => state.forYouPlaylist);

  return (
    <>
      <NavBar />
      <main className="flex flex-col lg:justify-center lg:items-center mt-24 lg:mt-16 mb-20">
        <section className="flex flex-col lg:flex-row items-center justify-center w-screen lg:h-screen">
          <div className="flex flex-col justify-center items-center gap-2 w-full lg:w-2/3 px-10">
            <h1
              className="font-inter font-extrabold text-5xl lg:text-7xl bg-gradient-to-r bg-clip-text text-transparent 
            from-indigo-700 via-purple-700 to-indigo-400
            animate-text"
            >
              Crea, comparte y disfruta la música sin límites
            </h1>
            <p className="font-inter font-medium text-black">
              Cierusic es la plataforma en línea para crear, compartir y
              descubrir música de todo el mundo. Únete y experimenta un nuevo
              mundo musical.
            </p>
          </div>
        </section>
        <div className="w-full flex justify-center items-center my-12">
          <p className="text-2xl lg:text-5xl font-bold text-slate-800">
            Playlist diseñadas para ti 🎵
          </p>
        </div>
        <section className="w-full flex flex-col lg:flex-row justify-center items-center gap-6 my-24">
          {forYouPlaylist?.map((playlist) => (
            <HomeForYouCard
              key={playlist.name}
              id={playlist.id}
              image={playlist.image}
              name={playlist.name}
              desc={playlist.desc}
              tags={playlist.tags}
            />
          ))}
        </section>
        <section className="my-24 lg:my-0">

        <HomeNews />
        </section>
        <Footer />
      </main>
    </>
  );
}
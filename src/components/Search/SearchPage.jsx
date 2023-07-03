import React from "react";
import NavBar from "../Navbar/Navbar";
import { useSelector } from "react-redux";
import SearchUsers from "./SearchUsers";
import SearchSongs from "./SearchSongs";
import SearchPlaylist from "./SearchPlaylist";

export default function SearchPage() {
  const search = useSelector((state) => state.search);
  if (search.length === 0) {
    return <p>Cargando...</p>;
  }
  return (
    <>
      <NavBar />
      <section className="mt-16 w-full flex flex-col justify-center items-center px-10">
        <p className="text-black font-inter py-6 text-2xl">
          Resultados de tu busqueda:
        </p>
        <div className="bg-white w-full flex justify-center items-center rounded-xl">
          {search.playlistTop.length === 0 &&
          search.users.length === 0 &&
          search.songs.length === 0 ? (
            <p>No se encontraron resultados para tu busqueda!</p>
          ) : (
            <div className="w-full">
              <SearchSongs songs={search.songs} />
              <SearchPlaylist playlist={search.playlistTop} />
              <SearchUsers users={search.users} />
            </div>
          )}
        </div>
      </section>
    </>
  );
}

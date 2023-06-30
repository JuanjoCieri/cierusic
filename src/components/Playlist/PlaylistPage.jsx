import React, { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Link, useParams } from "react-router-dom";
import { CommentIcon } from "../../utils/Emojis/emojis";
import { useDispatch, useSelector } from "react-redux";
import { getPlaylistDetail, getPlaylistSongs } from "../../redux/Actions";
import Likes from "../../utils/likes/Likes";
import Comments from "../../utils/comments/Comments";
import LikesPlaylist from "../../utils/likes/LikesPlaylist";
import Play from "../../utils/play/Play";
import AddToPlaylist from "../../utils/addToPlaylist/AddToPlaylist";
import { useState } from "react";

function formatFirestoreDate(firebaseDate) {
  const dateObj = new Date(firebaseDate._seconds * 1000);
  return dateObj.toLocaleString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PlaylistPage() {
  let { id } = useParams();
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const playlist = useSelector((state) => state.playlist);
  const dispatch = useDispatch();
  const playlistSongs = useSelector((state) => state.playlistSongs.songs);
  const [formattedDate, setFormattedDate] = useState("");
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  useEffect(() => {
    dispatch(getPlaylistDetail(id));
    dispatch(getPlaylistSongs(id));
  }, [dispatch]);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (playlistSongs?.length > 0) {
      const timestamp = playlistSongs[0]?.date;
      const formattedDate = formatFirestoreDate(timestamp);
      setFormattedDate(formattedDate);
    }
  }, [playlistSongs]);

  if (playlist.length === 0 && !playlistSongs) {
    return <p className="left-0">Cargando...</p>;
  }

  return (
    <>
      <Navbar />
      <main className="w-screen flex flex-col justify-center items-center mt-16 mb-16">
        <section className="w-screen flex flex-col justify-center items-center ">
          <div className="w-full h-52 flex justify-center items-center ">
            <img
              src={playlist?.image}
              className="h-52 w-full object-cover blur-sm"
            />
            <img src={playlist?.image} className="w-52 absolute border" />
          </div>
          <div className="mt-6 px-10 w-full flex items-center justify-center">
            <div className="w-1/2 flex flex-col justify-start items-start gap-2">
              <h2 className="text-5xl font-extrabold text-slate-800">
                {playlist?.name}
              </h2>
              <p className="text-slate-800">
                Playlist creada por {playlist && playlist?.author[0]}
              </p>
              <p className="text-slate-800">
                {playlistSongs?.length} canciones
              </p>
            </div>
            <div className="w-1/2 flex flex-col justify-end items-end gap-2">
              {/* <p className="text-slate-800">Creada el {currentPlaylist[0]?.date}</p> */}
              <p className="text-slate-800">
                {playlist?.likes.length}{" "}
                {playlist?.likes.length === 1 ? "like" : "likes"}
              </p>
              <button class="text-black bg-transparent border-none">
                <LikesPlaylist playlistId={playlist?.id} />
              </button>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3 px-5 ">
              <div class="container">
                <div class="py-8">
                  <div class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8">
                    <div class="inline-block min-w-full overflow-hidden rounded-2xl shadow">
                      <table class="min-w-full leading-normal">
                        <thead>
                          <tr>
                            <th
                              scope="col"
                              class="px-5 py-3 text-sm font-normal text-left text-gray-800 uppercase bg-white border-b border-gray-200"
                            ></th>
                            <th
                              scope="col"
                              class="px-5 py-3 text-sm text-left text-gray-800 bg-white border-b border-gray-200"
                            >
                              Titulo
                            </th>
                            <th
                              scope="col"
                              class="px-5 py-3 text-sm text-left text-gray-800 bg-white border-b border-gray-200"
                            >
                              Artista
                            </th>
                            {isDesktop ? (
                              <th
                                scope="col"
                                class="px-5 py-3 text-sm  text-left text-gray-800 bg-white border-b border-gray-200"
                              >
                                Agredada
                              </th>
                            ) : (
                              false
                            )}
                            <th
                              scope="col"
                              class="px-5 py-3 text-sm  text-left text-gray-800 bg-white border-b border-gray-200"
                            ></th>
                          </tr>
                        </thead>
                        <tbody>
                          {!playlistSongs ? (
                            <p>Cargando...</p>
                          ) : (
                            playlistSongs.map((song, index) => (
                              <tr className="hover:bg-red-200">
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <Play
                                    playlistId={id}
                                    index={index}
                                    songId={song.id}
                                  />
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <div class="flex items-center">
                                    <div class="flex-shrink-0">
                                      <Link to={"/song/" + song.id}>
                                        <a href="#" class="relative block">
                                          <img
                                            alt="profil"
                                            src={song.image}
                                            class="mx-auto object-cover h-10 w-10 "
                                          />
                                        </a>
                                      </Link>
                                    </div>
                                    <div class="ml-3">
                                      <Link to={"/song/" + song.id}>
                                        <p class="text-gray-900 whitespace-no-wrap hover:text-fuchsia-400">
                                          {song.name}
                                        </p>
                                      </Link>
                                    </div>
                                  </div>
                                </td>
                                <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                  <p class="text-gray-900 whitespace-no-wrap">
                                    {song.artist[0]}
                                  </p>
                                </td>
                                {isDesktop ? (
                                  <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                                    <p className="text-gray-900 whitespace-no-wrap">
                                      {formatFirestoreDate(song.date)}
                                    </p>
                                  </td>
                                ) : (
                                  false
                                )}
                                <td class="px-2 lgpx-10 py-5 text-sm bg-white border-b border-gray-200">
                                  <div className="flex justify-center items-center gap-3">
                                    <Likes songId={song.id} />
                                    <AddToPlaylist songId={song.id} />
                                  </div>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-6 lg:pr-6">
              <div class="w-full p-4 my-12 bg-white shadow-lg rounded-2xl dark:bg-gray-700">
                <div className="w-full flex items-center justify-between pb-4">
                  <p class="font-bold text-black text-md dark:text-white">
                    Comentarios
                  </p>
                  <div className="flex items-center justify-center gap-1">
                    <p class="font-medium text-black text-sm dark:text-white">
                      Agregar comentario
                    </p>
                    <CommentIcon />
                  </div>
                </div>
                {playlist?.comments?.length === 0 ? (
                  <div className="w-full flex items-center justify-center">
                    <p className="py-10">No hay comentarios</p>
                  </div>
                ) : (
                  <ul>
                    {playlist?.comments?.map((com) => (
                      <li class="flex items-center my-6 space-x-2">
                        <a href="#" class="relative block">
                          <Link to={"/users/" + com.userId}>
                            <img
                              alt="profil"
                              src={com.userImage}
                              class="mx-auto object-cover rounded-full h-10 w-10 "
                            />
                          </Link>
                        </a>
                        <div class="flex flex-col max-w-xs">
                          <Link to={"/users/" + com.userId}>
                            <span class="ml-2 text-sm font-semibold text-gray-900 dark:text-white">
                              {com.userName}
                            </span>
                          </Link>
                          <span class="ml-2 break-words text-sm text-gray-400 dark:text-gray-300">
                            {com.comment}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}
                <div>
                  <Comments playlistId={playlist?.id} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

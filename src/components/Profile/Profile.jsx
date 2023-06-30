import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../Navbar/Navbar";
import { MapIcon, PlayIcon } from "../../utils/Emojis/emojis";
import { useDispatch, useSelector } from "react-redux";
import {
  getLikedUserSongs,
  getUserDetail,
  getUserSongs,
} from "../../redux/Actions";
import Upload from "../Forms/Upload/Upload";
import Likes from "../../utils/likes/Likes";
import AddToPlaylist from "../../utils/addToPlaylist/AddToPlaylist";

export default function Profile() {
  const dispatch = useDispatch();
  let { id } = useParams();
  const user = useSelector((state) => state.userDetail);
  const loggedUser = useSelector((state) => state.loggedUser);
  const owner = user.id === loggedUser.id ? true : false;
  useEffect(() => {
    dispatch(getUserDetail(id));
    dispatch(getLikedUserSongs(id));
    dispatch(getUserSongs(id));
  }, [dispatch, id]);
  const likedSongs = useSelector((state) => state.likedSongs);
  console.log(likedSongs);
  const userSongs = useSelector((state) => state.userSongs);

  if (user.length === 0) {
    return <p>Cargando...</p>;
  }

  return (
    <>
      <NavBar />
      <main className="w-screen h-screen flex flex-col lg:flex-row justify-center my-32 lg:my-24">
        <div className="w-full lg:w-2/3 px-4 ">
          <div class="m-auto overflow-hidden rounded-lg shadow-lg cursor-pointer h-90 w-full">
            {/* <a href="#" class="block w-full h-full"> */}
            <img
              alt="blog photo"
              src="https://res.cloudinary.com/dqdmm93bn/image/upload/v1683414226/cool-background_1_dmgqbp.png"
              class="object-cover w-full max-h-40"
            />
            <img
              src={user.image}
              className="mx-auto object-cover rounded-full h-32 w-32 -mt-16 ml-12"
            />
            <div class="w-full p-4 bg-white -mt-16 flex justify-around items-end h-44">
              <div className="flex flex-col justify-center items-start pl-4 lg:pl-52 gap-3">
                <div className="flex justify-center items-center gap-1">
                  <MapIcon />
                  <p className="text-black">{user.city}</p>
                </div>
                <div className="flex justify-center items-center gap-1">
                  <p className="text-gray-500">{user?.songs.length} </p>
                  <p className="text-gray-500 "> canciones</p>
                </div>
              </div>
              <div>
                <div className="lg:w-full w-full h-full flex flex-col justify-center items-center gap-10">
                  <p class="text-4xl font-medium text-gray-800 dark:text-white text-center lg-text-start">
                    {user.name}
                  </p>
                  <p class="font-light text-gray-400 dark:text-gray-300 text-md w-full  truncate ...">
                    {user.desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white mt-8 rounded-lg shadow-lg">
            <div className="border-b py-2 px-4 flex justify-between items-center">
              <p className="text-black font-semibold">
                Canciones de {user.name}
              </p>
              {owner ? <Upload /> : false}
            </div>
            <div>
              <div className="w-full flex justify-center items-center">
                {userSongs.length === 0 ? (
                  <h4 className="text-gray-600 font-semibold py-10">
                    Este usuario no tiene canciones
                  </h4>
                ) : (
                  <table class="min-w-full leading-normal">
                    <tbody>
                      {userSongs.map((song) => (
                        <tr className="hover:bg-red-200">
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <div class="flex items-center">
                              <div class="flex-shrink-0">
                                <a href="#" class="relative block">
                                  <img
                                    alt="profil"
                                    src={song.image}
                                    class="mx-auto object-cover h-10 w-10"
                                  />
                                </a>
                              </div>
                              <div class="ml-3 flex flex-col">
                                <p class="text-gray-900 whitespace-no-wrap hover:text-fuchsia-400 font-semibold">
                                  {song.name}
                                </p>
                                <p class="text-gray-900 whitespace-no-wrap hover:text-fuchsia-400 ">
                                  {song.artist[0]}
                                </p>
                              </div>
                            </div>
                          </td>
                          <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                            <button>
                              <PlayIcon />
                            </button>
                          </td>
                          <td class="px-10 py-5 text-sm bg-white border-b border-gray-200">
                            <div className="flex justify-center items-center gap-3">
                              <Likes songId={song.id} />
                              <AddToPlaylist songId={song.id} />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 my-10 lg:my-0 px-4">
          <div className="bg-white w-full rounded-lg shadow-lg">
            <div className="border-b py-2 px-4 flex justify-between items-center">
              <p className="text-black font-semibold">Me gusta</p>
              <p className="text-gray-700 text-sm">
                {user?.likes.length} canciones
              </p>
            </div>
            <div>
              {likedSongs.length === 0 ? (
                <div className="w-full flex justify-center items-center p-5">
                  <p>Sin me gusta</p>
                </div>
              ) : (
                <table class="min-w-full leading-normal">
                  <tbody>
                    {likedSongs.map((s) => (
                      <tr className="hover:bg-red-200">
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <Link to={"/song/" + s.id}>
                                <a href="#" class="relative block">
                                  <img
                                    alt="profil"
                                    src={s.image}
                                    class="mx-auto object-cover h-10 w-10"
                                  />
                                </a>
                              </Link>
                            </div>
                            <div class="ml-3 flex flex-col">
                              <Link to={"/song/" + s.id}>
                                <p class="text-gray-900 whitespace-no-wrap hover:text-fuchsia-400 font-semibold">
                                  {s.name}
                                </p>
                              </Link>
                              <p class="text-gray-900 whitespace-no-wrap hover:text-fuchsia-400 ">
                                {s.artist[0]}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 text-sm bg-white border-b border-gray-200">
                          <button>
                            <PlayIcon />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

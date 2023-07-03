import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/Navbar";
import React, { useEffect } from "react";
import CardUserLikes from "./CardUserLikes";
import { Link, useParams } from "react-router-dom";
import { getLikedUserSongs } from "../../redux/Actions";

export default function UserLikes() {
  const {id} = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getLikedUserSongs(id))
  }, [id])
  const likedSongs = useSelector((state) => state.likedSongs);
  return (
    <>
      <NavBar />
      <main className="w-screen h-screen flex flex-col justify-start items-center my-24 lg:mx-5">
        <p className="text-2xl text-black font-semibold">Tus me gusta</p>
        <div className="w-full mt-5 flex justify-center items-center bg-white py-10 rounded-lg shadow-xl shadow-purple-500/50 dark:shadow-xl dark:shadow-purple-800/80">
          {likedSongs && likedSongs.length === 0 ? (
            <div className="w-full flex justify-center items-center py-10">
              <p>No le has dado like a ninguna canción.</p>
            </div>
          ) : (
            <div className="rounded-lg grid grid-rows lg:grid-cols-4 gap-10">
              {likedSongs.map((s) => (
                <Link to={"/song/" + s.id}>
                  <CardUserLikes
                    image={s.image}
                    artist={s.artist[0]}
                    name={s.name}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </>
  );
}


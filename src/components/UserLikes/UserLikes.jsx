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
      <main className="w-screen h-screen flex flex-col justify-start items-center mt-24 mx-5">
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

// {
//   "date": "7 de noviembre de 2021",
//   "image": "https://lastfm.freetls.fastly.net/i/u/ar0/92057e350d344b6acb66b62862177241.jpg",
//   "artist": [
//       "Modjo",
//       "123456789"
//   ],
//   "name": "Lady (Here me Tonight)",
//   "fileUrl": "https://firebasestorage.googleapis.com/v0/b/cierusi.appspot.com/o/GTA%20V%20Radio%20%5BNon-Stop-Pop-FM%5D%20Modjo%20-%20Lady%20(Here%20Me%20Tonight)%20(online-audio-converter.com).mp3?alt=media&token=fe40ddee-321d-465b-9788-064602823632",
//   "comments": [
//       {
//           "date": {
//               "_seconds": 1683636346,
//               "_nanoseconds": 653000000
//           },
//           "comment": "Que temonnnn",
//           "userId": "V7TmpVnZDxNeiz2pGsts"
//       }
//   ],
//   "likes": [
//       "E252G5nT0bn66wZy7Ruj",
//       "V7TmpVnZDxNeiz2pGsts"
//   ]
// }
